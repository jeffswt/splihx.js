
// splihx.js: Splix Hacks as a Javascript module (Hooks v.142)
// Copyright (C) 2017  jeffswt.
//
// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with this program.  If not, see <http://www.gnu.org/licenses/>.

var block_advertisements = false;
var force_enable_skin_customization = false;

// Display console ASCII art

console.log('              :::   :::       :::     :::    ::: ::::::::::      ');
console.log('            :+:+: :+:+:    :+: :+:   :+:   :+:  :+:              ');
console.log('          +:+ +:+:+ +:+  +:+   +:+  +:+  +:+   +:+               ');
console.log('         +#+  +:+  +#+ +#++:++#++: +#++:++    +#++:++#           ');
console.log('        +#+       +#+ +#+     +#+ +#+  +#+   +#+                 ');
console.log('       #+#       #+# #+#     #+# #+#   #+#  #+#                  ');
console.log('      ###       ### ###     ### ###    ### ##########            ');
console.log('         ::::::::  :::::::::  :::        ::::::::::: :::    :::  ');
console.log('       :+:    :+: :+:    :+: :+:            :+:     :+:    :+:   ');
console.log('      +:+        +:+    +:+ +:+            +:+      +:+  +:+     ');
console.log('     +#++:++#++ +#++:++#+  +#+            +#+       +#++:+       ');
console.log('           +#+ +#+        +#+            +#+      +#+  +#+       ');
console.log('   #+#    #+# #+#        #+#            #+#     #+#    #+#       ');
console.log('   ########  ###        ########## ########### ###    ###        ');
console.log('          ::::::::  :::::::::  ::::::::::     ::: :::::::::::    ');
console.log('        :+:    :+: :+:    :+: :+:          :+: :+:   :+:         ');
console.log('       +:+        +:+    +:+ +:+         +:+   +:+  +:+          ');
console.log('      :#:        +#++:++#:  +#++:++#   +#++:++#++: +#+           ');
console.log('     +#+   +#+# +#+    +#+ +#+        +#+     +#+ +#+            ');
console.log('    #+#    #+# #+#    #+# #+#        #+#     #+# #+#             ');
console.log('    ########  ###    ### ########## ###     ### ###              ');
console.log('          :::      ::::::::      :::     ::::::::::: ::::    ::: ');
console.log('       :+: :+:   :+:    :+:   :+: :+:       :+:     :+:+:   :+:  ');
console.log('     +:+   +:+  +:+         +:+   +:+      +:+     :+:+:+  +:+   ');
console.log('   +#++:++#++: :#:        +#++:++#++:     +#+     +#+ +:+ +#+    ');
console.log('  +#+     +#+ +#+   +#+# +#+     +#+     +#+     +#+  +#+#+#     ');
console.log(' #+#     #+# #+#    #+# #+#     #+#     #+#     #+#   #+#+#      ');
console.log('###     ###  ########  ###     ### ########### ###    ####       ');
console.log('=================================================================');
console.log('                           splihx.js                             ');

// Skip death transition animation

skipDeathTransition = true;

// Draw a white dot on my player

localStorage.drawWhiteDot = true;

// Display ping

localStorage.drawDebug = true;

// Use ugly mode

localStorage.uglyMode = true;

// Profanity replacement

swearRepl = '[Profanity]';

// Advertisement blocker

if (block_advertisements) {
    getAdCounter = function() {
        console.log('splihx.js: Blocked before-game advertisement from displaying.');
        return 0;
    }
    countAd = function() {
        lsSet("adCounter", 0);
        return false;
    }
    requestCanRunAds = function() {
        console.log('splihx.js: Blocked before-game advertisement from displaying.');
        canRunAdsRequested = true;
        canRunAds = false;
        return ;
    };
    setUpAdBoxContent = function() {
        return ;
    };
    document.getElementById('adbox').style = "display:none";
    document.getElementById('newsbox').style = "height:0px;width:0px"; // Functions forbid "display:none", and we are using something else.
    document.getElementById('appLinks').style = "display:none";
    console.log('splihx.js: Blocked advertisement banner from displaying.');
}

// Enabled skin customization

if (force_enable_skin_customization) {
    checkShared = function() {
        var a = true,
            b = a ? null : "none",
            c = a ? "none" : null;
        skinButtonCanvas.style.display = b;
        skinButtonShadow.style.display = b;
        shareToUnlock.style.display = c;
        return ;
    }
    lsSet("s", 1);
    checkShared();
}

// Adding attribution for splihx in function loop(...). (splix.js:3322)
eval(('' + loop)
    .replace('Close an area to fill it with your color.', 'This <code style=\\"font-size:12pt\\"><strong>splix.io</strong></code> instance is hacked with <code style=\\"font-size:12pt\\"><strong>splihx.js</strong></code>.')
    .replace('Don\'t get hit by other players.', '<code style=\\"font-size:12pt\\"><strong>splihx.js</strong></code> is <code style=\\"font-size:12pt\\"><strong>&lt;/&gt;</strong></code>ed with ❤ by jeffswt.')
);

// Circle drawing code injected at drawPlayer(...) (splix.js:2780)
// Due to the immense size, we decided to use eval() injection

eval(('' + drawPlayer)
    .replace('a.fillStyle=o,', 'a.fillStyle=f.player,')
);

// Make colours look better (splix.js:3844)

colors = {
    grey: {
        BG: "#3a342f",
        brighter: "#4e463f",
        darker: "#2d2926",
        diagonalLines: "#c7c7c7",
        player: "#706860"
    },
    red: {
        brighter: "#a22929",
        darker: "#7b1e1e",
        slightlyBrighter: "#af2c2c",
        pattern: "#8c2222",
        patternEdge: "#631717",
        boundsDark: "#420707",
        boundsBright: "#4c0808",
        player: "#e37474"
    },
    red2: { // Modified, too bright
        brighter: "#bf3f63",
        darker: "#9c0933",
        slightlyBrighter: "#e33b6b",
        pattern: "#c21345",
        patternEdge: "#9c1c40",
        player: "#e3245a"
    },
    pink: {
        brighter: "#A22974",
        darker: "#7A1F57",
        pattern: "#8A2262",
        patternEdge: "#5E1743",
        slightlyBrighter: "#B02C7E",
        player: "#f549b3"
    },
    pink2: {
        brighter: "#7D26EF",
        darker: "#5E1DBA",
        pattern: "#6A21D1",
        patternEdge: "#4C1896",
        slightlyBrighter: "#882DFF",
        player: "#8e45f5"
    },
    purple: {
        brighter: "#531880",
        darker: "#391058",
        pattern: "#4b1573",
        patternEdge: "#3b115a",
        slightlyBrighter: "#5a198c",
        player: "#8605e8"
    },
    blue: {
        brighter: "#27409c",
        darker: "#1d3179",
        pattern: "#213786",
        patternEdge: "#1b2b67",
        slightlyBrighter: "#2a44a9",
        player: "#5f7de8"
    },
    blue2: {
        brighter: "#3873E0",
        darker: "#2754A3",
        pattern: "#2F64BF",
        patternEdge: "#1F4587",
        slightlyBrighter: "#3B79ED",
        player: "#8cb2fa"
    },
    green: { // Modified, too bright
        brighter: "#17981c",
        darker: "#0c8615",
        pattern: "#149320",
        patternEdge: "#077210",
        slightlyBrighter: "#20a437",
        player: "#63d46d"
    },
    green2: {
        brighter: "#1e7d29",
        darker: "#18561f",
        pattern: "#1a6d24",
        patternEdge: "#14541c",
        slightlyBrighter: "#21882c",
        player: "#07db1f"
    },
    leaf: {
        brighter: "#6a792c",
        darker: "#576325",
        pattern: "#5A6625",
        patternEdge: "#454F1C",
        slightlyBrighter: "#738430",
        player: "#a9d10a"
    },
    yellow: { // Too bright, modified
        brighter: "#c6b923",
        darker: "#af992b",
        pattern: "#D1A932",
        patternEdge: "#B5922B",
        slightlyBrighter: "#d4b51c",
        player: "#f0c800"
    },
    orange: {
        brighter: "#d06c18",
        darker: "#ab5a15",
        pattern: "#AF5B16",
        patternEdge: "#914A0F",
        slightlyBrighter: "#da7119",
        player: "#f7a62d"
    },
    gold: {
        brighter: "#F6B62C",
        darker: "#F7981B",
        pattern: "#DC821E",
        patternEdge: "#BD6B0E",
        slightlyBrighter: "#FBDF78",
        bevelBright: "#F9D485",
        player: "#d9af1a"
    }
};

// Make Splix see farther!

var zoom_level = 1;
var zoom_available = true;
var change_zoom_func = function(ratio) {
    ratio = Math.pow(2, ratio);
    VIEWPORT_RADIUS = 15 * ratio;
    MAX_ZOOM = 215 * ratio;
    BLOCKS_ON_SCREEN = 550 * ratio;
    return ;
}
var change_zoom_anim = function(dir, begin, cur, targ) {
    if ((dir == true && cur > targ) || (dir == false) && (cur < targ)) {
        change_zoom_func(targ);
        zoom_available = true;
        return ;
    }
    change_zoom_func(cur);
    cur += (targ - begin) * 0.12;
    setTimeout(function() {
        change_zoom_anim(dir, begin, cur, targ);
    }, 10);
    return ;
}
var change_zoom = function(frm, to) {
    dir = frm < to;
    change_zoom_func(frm);
    change_zoom_anim(dir, frm, frm, to);
    return ;
}
var zoom_in = function() {
    if (!zoom_available)
        return ;
    if (zoom_level <= 0)
        return ;
    zoom_level -= 1;
    zoom_available = false;
    change_zoom(zoom_level + 1, zoom_level);
    return ;
}
var zoom_out = function() {
    if (!zoom_available)
        return ;
    if (zoom_level >= 4)
        return ;
    zoom_level += 1;
    zoom_available = false;
    change_zoom(zoom_level - 1, zoom_level);
    return ;
}
