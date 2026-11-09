from pathlib import Path
import re
root=Path(__file__).resolve().parents[1];ref=root.parent/'Reference/Lamba/assets/scss'
assign={'layout/pagetitle':'page-title','layout/accordion':'faqs','module/header':'site-header','module/footer':'site-footer','module/carousel':'slider','module/slider':'slider','module/banners':'banner-layout1','module/about':'pb-0','module/fancybox':'fancybox-layout1','module/portfolio':'portfolio','module/team':'team-layout1','module/testimonial':'testimonials','module/clients':'clients','module/blog':'blog','module/contact':'contact-layout1','module/pricing':'pricing','module/counters':'counters','module/shop':'shop-grid','module/sidebar':'fixed-sidebar','module/progress-bars':'animated-Progressbars','module/video':'video','module/awards':'awards','module/utilities-pages':'page-404','module/countdown':'page-404'}
contents={};master=(ref/'style.scss').read_text()
for partial,component in assign.items():
 folder,name=partial.split('/');source=(ref/folder/('_'+name+'.scss')).read_text().replace('url(../images/','url(/assets/images/')
 mixin='reference-'+name
 contents[component]=contents.get(component,'// Original template rules. Emitted once, in original order, by styles/reference/style.scss.\n')+f'\n@mixin {mixin} {{\n'+source+'\n}\n'
 master=master.replace(f"@import '{partial}';",f"@import '../../app/shared/{component}/{component}.component';\n@include {mixin};")
for component,source in contents.items():(root/'src/app/shared'/component/(component+'.component.scss')).write_text(source)
(root/'src/styles/reference/style.scss').write_text(master)
