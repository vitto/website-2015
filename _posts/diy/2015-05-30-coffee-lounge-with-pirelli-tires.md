---

title: Coffee lounge with Pirelli tires
category: diy
layout: post
cover: true

---

**Lorenzo** e `Sarah`, due miei cari amici, sono da poco andati ad abitare assieme in una bella casa di 3 piani che è in gran parte già arredata, hanno in mente di cambiare gradualmente l’arredamento che non li rispecchia pienamente.

Qualche giorno fa mi hanno invitato a vedere l’appartamento che mi ha davvero stupito in quanto a dimensioni, è un appartamento pieno di aree differenti tra loro che si possono destinare in tanti modi diversi. Entrambi sono interessati allo stile [DIY][diy], ho pensato quindi di dargli una spintarella sul genere dell’arredamento di casa realizzando un tavolino per la sala, una delle prime aree che vogliono cambiare.

Da qualche settimana avevo un paio di pneumatici in magazzino che avevo in mente di recuperare per fare un piccolo tavolino da mettere vicino al divano di casa, ho deciso di utilizzarli per loro.

###Misure

~~~ ruby
module Pipiloc
  class MarkdownTag < Liquid::Tag
    def initialize(tag_name, text, tokens)
      super
      @text = text.strip
    end
    require "kramdown"
    def render(context)
      tmpl = File.read File.join Dir.pwd, "_includes", @text
      site = context.registers[:site]
      tmpl = (Liquid::Template.parse tmpl).render site.site_payload
      html = Kramdown::Document.new(tmpl).to_html
    end
  end
end
Liquid::Template.register_tag('markdown', Jekyll::MarkdownTag)
~~~


[diy]: http://it.wikipedia.org/wiki/DIY_(punk) "Go to wikipedia page"
[image_cover]: /img/posts/coffee-lounge-with-pirelli-tires/image-cover.jpg  "Optional title attribute"
<!--- ![Alt text][image_cover] -->
