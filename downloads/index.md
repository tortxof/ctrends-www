---
layout: default
title: Downloads
---
## Full Disk Encryption

[TrueCrypt 7.1a](/downloads/TrueCrypt_Setup_7.1a.exe)  
SHA1SUM: 7689d038c76bd1df695d295c026961e50e4a62ea

## Anti-Malware

{% for link in site.data.anti-malware %}
[{{ link.text }}]({{ link.url }})

{% endfor %}
