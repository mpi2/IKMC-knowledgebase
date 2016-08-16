function ShowHelp(div, title, desc, width) {

	var width = (width) ? width : '';
	var div = document.getElementById(div);
	var html = '<div>';
	html += (title) ? '<b>' + title + '</b><br>' : '';
	html += desc;
	html += '</div>';
	
	div.style.margin = '0px 0px 0px 5px';
	//div.style.whiteSpace = 'nowrap';
	
	div.style.display = 'inline';
	div.style.position = 'absolute';
	div.style.width = width;
	div.style.backgroundColor = 'lightyellow';
	div.style.border = 'solid 1px black';
	div.style.padding = '3px';
	div.style.color = '#000000';
	div.innerHTML = html;
}

function HideHelp(div) {
	document.getElementById(div).style.display = 'none';
}

function selectAll(action, id, values) {
	
	var obj = document.getElementById(id);
	
	if(values != null) {
		var values = values.split(',');
		var apos_action = (action) ? false : true;
		
		selectAll(apos_action, id);
		
		for (i=0; i<values.length; i++) {
			for (j=0; j<obj.options.length; j++) {
				if(values[i] == obj.options[j].value) {
					obj.options[j].selected = action;
					break;
				}
			}
		}
		
	} else {
		for (i=0; i<obj.options.length; i++) {
			obj.options[i].selected = action;
		}	
	}
}

function ShowDiv(div, display_block) {
	var div = document.getElementById(div);
	div.style.display = (display_block) ? 'block' : 'inline';
}

function HideDiv(div) {
	var div = document.getElementById(div);
	div.style.display = 'none';
}

function createCookie(name,value,days) {
	if (days) {
		var date = new Date();
		date.setTime(date.getTime()+(days*24*60*60*1000));
		var expires = "; expires="+date.toGMTString();
	}
	else var expires = "";
	document.cookie = name+"="+value+expires+"; path=/";
}

function goPage(page) {
	document.location.href = page;
	return false;
}

function browseSubmit(page, form_id, rewrite) {
	if(rewrite != 0 || !rewrite) {
		goPage(page);
	} else {
		document.getElementById(form_id).submit(true);
	}
}

function submitBrowseCategory(page, rewrite) {
	var f = document.getElementById('category_browse');
	var c = document.getElementById('CategoryID');
	var p = (c.value) ? page+c.value+'/' : page;
	
	browseSubmit(p, f.id, rewrite);
}

function doBottomRate(val) {
	var f = document.getElementById('form_vote2');
	var f2 = document.getElementById('rate2');
	f2.value = val;
	f.submit(true);
}

function validateQuickSearch(message) {
	var f = document.getElementById('searchq');
	var d = document.getElementById('div_search_alert');
	if(isBlank(f.value)) {
		//alert(message);
		d.style.display = 'block';
		f.focus();
		return false;
	}
	
	d.style.display = 'none';

	return true;	
}

//-------------------------------------------------------------------
// isBlank(value)
//   Returns true if value only contains spaces
//-------------------------------------------------------------------
function isBlank(val){
	if(val == null){ return true; }
	for(var i=0;i<val.length;i++) {
		if ((val.charAt(i)!=' ')&&(val.charAt(i)!="\t")&&(val.charAt(i)!="\n")&&(val.charAt(i)!="\r")){return false;}
	}
	return true;
}


function in_array(what, where) {
    
    var a=false;
    for(var i=0; i<where.length; i++) {
    
        if(what == where[i]) {
            a=true;
            break;
        }

    }

    return a;
}

// add outerHTML property at Gecko
if (window.Node && window.XMLSerializer) {
    Node.prototype.__defineGetter__('outerHTML', function() {
        return new XMLSerializer().serializeToString(this);
    });
}