/*
 Cam on ban da su dung template mien phi cua chung toi
 Website: http://ptsblogger.com/
 */
var hp_sign = '2932be849a29933ccef5b862813a7651';
function hp_debug(msg) {
    console.log(msg);
}
function hp_echo(str) {
    document.write(str);
}
function hp_rediect(url) {
    location.href = url;
}
function hp_date(iso, sformat) {
    //2016-04-06T14:20:00+07:00
    var d = new Date(iso);
    if (d.toString() === 'Invalid Date')
        return '';

    var delim = '/', delimHour = ':';
    if (typeof sformat === 'undefined')
        sformat = 'dd/mm/YYYY';
    if (sformat == 'dd/mm/YYYY') {
        return hp_pad(d.getDate()) + delim + hp_pad(d.getMonth() + 1) + delim + d.getFullYear();
    } else if (sformat == 'dd-mm-YYYY') {
        delim = '-';
        return hp_pad(d.getDate()) + delim + hp_pad(d.getMonth() + 1) + delim + d.getFullYear();
    } else if (sformat == 'HH:ii') {
        return hp_pad(d.getHours()) + delimHour + hp_pad(d.getMinutes());
    } else if (sformat == 'dd/mm') {
        return hp_pad(d.getDate()) + delim + hp_pad(d.getMonth() + 1);
    } else if (sformat == 'dd-mm') {
        delim = '-';
        return hp_pad(d.getDate()) + delim + hp_pad(d.getMonth() + 1);
    } else if (sformat == 'mm/YYYY') {
        return hp_pad(d.getMonth() + 1) + delim + d.getFullYear();
    } else if (sformat == 'mm-YYYY') {
        delim = '-';
        return hp_pad(d.getMonth() + 1) + delim + d.getFullYear();
    } else {
        delim = '/';
        return hp_pad(d.getDate()) + delim + hp_pad(d.getMonth() + 1) + delim + d.getFullYear();
    }
}

function hp_pad(num, size) {
    var s = num + "";
    while (s.length < size)
        s = "0" + s;
    return s;
}

function hp_render(json, tpl, ret) {
    var html = '';
    for (var i = 0; i < json.feed.entry.length; i++) {
        for (var j = 0; j < json.feed.entry[i].link.length; j++) {
            if (json.feed.entry[i].link[j].rel == 'alternate') {
                var postUrl = json.feed.entry[i].link[j].href;
                break;
            }
        }
        var postId = json.feed.entry[i].id.$t;
        if (postId.indexOf(HP_CURRENT_SINGLE_ID) != -1)
            continue;
        var postTitle = json.feed.entry[i].title.$t;
        //var postSummary = json.feed.entry[i].summary.$t;
        var c = postContent = json.feed.entry[i].content.$t;
        if (json.feed.entry[i].media$thumbnail) {
            var r = json.feed.entry[i].media$thumbnail.url, a = r.replace("/s72-c/", "/s100/");
        } else if (null != postContent.match(/src=(.+?[\.jpg|\.gif|\.png]")/)) {
            var a = postContent.match(/src=(.+?[\.jpg|\.gif|\.png]")/)[1];
        } else {
            var a = 'http://placehold.it/375x200';
        }
        var postThumbnail = a.replace(/"/g, '');

        if (typeof tpl === 'undefined') {
            tpl = '<li><div class="li_wrap"><a title="__TITLE__" href="__URL__"><img width="120" src="__THUMBNAIL__"/><strong>__TITLE__</strong></a></div></li>';
        }
        var item = tpl;
        item = item.replace(/__TITLE__/g, postTitle).replace(/__CONTENT__/g, postContent).replace(/__THUMBNAIL__/g, postThumbnail).replace(/__URL__/g, postUrl);

        html += item;
    }
    if (typeof ret !== 'undefined') {
        if (ret === true) {
            return html;
        } else if (ret === false) {
            hp_echo(html);
        } else if (typeof ret === 'function') {
            // callback
            ret(html);
        }
    } else {
        hp_echo(html);
    }
}

function hp_replace(str, sfind, sreplace) {
    var regex = new RegExp(sfind.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&'), 'gi');
    return str.replace(regex, sreplace);
}

function hp_bind(id, html) {
    document.getElementById(id).innerHTML = html;
}

function hp_strip(html)
{
    var tmp = document.createElement("DIV");
    tmp.innerHTML = html;
    return tmp.textContent || tmp.innerText || "";
}
function hp_getSapo(html) {
    return hp_strip(html).substring(0, 96) + '...';
}
function hp_getImgSrc(html, vdefault) {
    var tmp = document.createElement("DIV");
    tmp.innerHTML = html;
    var imgs = tmp.getElementsByTagName('img');
    if (imgs.length > 0)
        return imgs.item(0).src;
    else
        return (typeof vdefault === 'undefined') ? 'http://placehold.it/600x400' : vdefault;// NO IMAGE
}
function hp_getHiddenData(html) {
    var c = html;
    var p1 = c.indexOf('<!--');
    var p2 = c.indexOf('-->');
    v = '';
    if (p1 != -1 && p2 != -1) {
        var v = c.substring(p1 + 4, p2);
    }
    return v;
}