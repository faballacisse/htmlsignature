// generate HTML signatures for a list of contacts
function generateSignatures(contactData) {
  var signatures = '';
  contactData.forEach(function(contact) {
    var signature = '<table width="550" border="0" cellpadding="0" cellspacing="0" style="border-collapse: collapse;mso-table-lspace:0pt;mso-table-rspace:0pt;">';
    signature += generateNameTitle(contact.name, contact.title);
    signature += generateLogo();
    /*signature += generateContactDetails(contact.mobile, contact.email, contact.phone, contact.website);
    signature += generateAddress();
    signature += generateSocialMediaIcons(contact.calendar);
    signature += generateLegalDisclaimer();*/
    signature += '</table><br>';
    signatures += signature;
  });
  return signatures;
}

function generateNameTitle(name, title) {
    var nameTitleHtml = '<tr>';
    nameTitleHtml += '<td width="370" height="20" colspan="2"  style="padding-bottom:5px; border-bottom:1px dotted #cda377;white-space:nowrap; background-color: transparent;mso-line-height-rule:exactly;line-height:140%; font-family: \'Poppins\', sans-serif; font-size: 12px;font-weight: 400;color: #4d4d4f;">';
    nameTitleHtml += '<strong style="font-weight: 600; font-size:16px; color:#4a4a4a;">' + name + '</strong><br>';
    nameTitleHtml += '<strong style="font-weight: 400; font-size:14px; color:#4a4a4a;">' + title + '</strong>';
    nameTitleHtml += '</td>';
    nameTitleHtml += '</tr>';
    return nameTitleHtml;
  }


  Copy code
function generateLogo() {
  var logoHtml = '<tr>';
  logoHtml += '<td width="100" height="20" colspan="1"  align="left" style="padding-top:5px; padding-bottom:5px;  padding-right:13px; white-space:nowrap; background-color: transparent;mso-line-height-rule:exactly;line-height:0%; font-family: \'Poppins\', sans-serif; font-size: 12px;font-weight: 400;color: #4d4d4f;">';
  logoHtml += '<a href="https://example.com" target="_blank"><img src="https://example.com/logo.png" draggable="false" oncontextmenu="return false;" height="100.104" width="70" style=" "></a>';
  logoHtml += '</td>';
  logoHtml += '</tr>';
  return logoHtml;
}