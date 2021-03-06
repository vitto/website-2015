# -*- coding: utf-8 -*-
# A LiquidTag to get Exif Tags using EXIFR
# by: Beni Buess
#
#
# Usage:
#
# {% exiftag tagname,[source],[file] %}
#
# Everything given as tagname is called on EXIFR::JPEG, so this could be model oder f_number.to_f (see https://github.com/remvee/exifr)
# If you give a source, this source is used build the fullpath for the given file (you can also configure them in _config.yml, see below)
# If the file is given, this is the file to get Exif Tags for, this can be alternatively defined in the YAML Front Matter as img: file
#
#
# Configuration:
#
# Put this in your _config.yml
#
# exiftag:
#  sources:
#    - photos
#    - photos/other_source
#
# These paths are relative to your sites root. Don't add leading and trailing slashes.
#

require 'exifr'

module Jekyll
  class ExifTag < Liquid::Tag
    def initialize(tag_name, params, token)
      super
      @args = self.split_params(params)
    end

    def render(context)
      #abort context.registers[:site].config['source'].inspect
      sources = Array.new(context.registers[:site].config['exiftag']['sources'])
      # first param is the exif tag
      tag = @args[0]

      # if a second parameter is passed, use it as a possible img source
      if @args.count > 2
        img_source = @args[2]
        sources.unshift(img_source)
      end

      # the image can be passed as the third parameter
      if @args.count > 1
        file = context[@args[1].strip]
        img = file
      # or be defined in the YAML Front Matter like img: <file>
      else
        img = context.environments.first["page"]["img"]
      end

      # first check if the given img is already the path
      if File.exist?(img)
        file_name = img
      else
      # then start testing with the sources from _config.yml
        begin
          source = sources.shift
          file_name = File.join(context.registers[:site].config['source'], source, img)
        end until File.exist?(file_name) or sources.count == 0
      end
      # try it and return empty string on failure
      begin
        exif = EXIFR::JPEG::new(file_name)
        return tag.split('.').inject(exif){|o,m| o.send(m)}
      rescue
        ""
      end
    end

    def split_params(params)
      params.split(",").map(&:strip)
    end
  end
end

Liquid::Template.register_tag('exiftag', Jekyll::ExifTag)
