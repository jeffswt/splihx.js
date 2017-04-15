
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
