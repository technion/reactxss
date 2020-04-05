#!/usr/bin/env ruby

require 'cgi'
require 'json'

lists = []

#To refresh, curl:
#https://www.owasp.org/index.php/XSS_Filter_Evasion_Cheat_Sheet
File.open('XSS_Filter_Evasion_Cheat_Sheet', 'r:UTF-8', ).each_line do |line|
  if /<pre(?:( class="(.*)"))>(?<xss>.*)/ =~ line
    vuln = {exploit: CGI.unescapeHTML(xss)}
    lists << vuln
  end
end

puts JSON.pretty_generate(lists)
