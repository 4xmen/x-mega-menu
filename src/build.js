const fs = require('fs');
var exec = require('child_process').exec;
const copyright = `/**
 * x mega menu - repsonsive mega menu
 *
 * Copyright (C) 2017 4xmen team <a1gard@4xmen.ir>
 *
 * LICENSE: This program is free software; you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by the Free
 * Software Foundation; either version 3 of the License, or (at your option) any
 * later version.  This program is distributed in the hope that it will be
 * useful, but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU General
 * Public License for more details.  You should have received a copy of the GNU
 * General Public License along with this program.
 * If not, see <http://opensource.org/licenses/gpl-license.php>.
 *
 * @package    x-mega-menu
 * @author     4xmen team  <www.4xmen.ir>
 * @author     A1Gard <a1gard@4xmen.ir>
 * @link       https://github.com/4xmen/x-mega-menu
 */
`;
function execPromise(command) {
    return new Promise(function(resolve, reject) {
        exec(command, (error, stdout, stderr) => {
            if (error) {
                reject(error);
                return;
            }

            resolve(stdout.trim());
        });
    });
}
async function Compress() {
    let src = fs.readFileSync('src/x-mega-menu.js', 'utf8');
    fs.writeFileSync('dist/x-mega-menu.js', src);
    await execPromise('minify dist/x-mega-menu.js > dist/x-mega-menu.min.js');
    await execPromise('minify dist/x-mega-menu.css > dist/x-mega-menu.min.css');
    await execPromise('minify dist/theme/x-mega-menu-blue.css > dist/theme/x-mega-menu-blue.min.css');
    await execPromise('minify dist/theme/x-mega-menu-dark.css > dist/theme/x-mega-menu-dark.min.css');
    await execPromise('minify dist/theme/x-mega-menu-gray.css > dist/theme/x-mega-menu-gray.min.css');
    src = fs.readFileSync('dist/x-mega-menu.min.js', 'utf8');
    fs.writeFileSync('dist/x-mega-menu.min.js', copyright + src);
}

Compress();