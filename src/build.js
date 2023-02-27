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
    return new Promise(function (resolve, reject) {
        exec(command, (error, stdout, stderr) => {
            if (error) {
                reject(error);
                return;
            }

            resolve(stdout.trim());
        });
    });
}

function commenting(lines, frm, end) {
    for (let i = frm; i < end; i++) {
        lines[i] = '//' + lines[i];
    }
    return lines;
}

function uncommenting(lines, frm, end) {
    for (let i = frm; i < end; i++) {
        lines[i] = lines[i].substr(2);
    }
    return lines;
}

async function theme(lines, frm1, end1, frm2, end2, name) {
    lines = commenting(lines, frm1, end1);
    lines = uncommenting(lines, frm2 , end2);
    await fs.writeFileSync('src/_variables.scss', lines.join('\n'));
    await execPromise('node-sass src/x-mega-menu.scss -o dist');
    await fs.copyFileSync('dist/x-mega-menu.css', 'dist/theme/x-mega-menu-'+name+'.css');
    await execPromise('minify dist/theme/x-mega-menu-'+name+'.css > dist/theme/x-mega-menu-'+name+'.min.css');
}


async function Compress() {
    // build js
    let src = await fs.readFileSync('src/x-mega-menu.js', 'utf8');
    await fs.writeFileSync('dist/x-mega-menu.js', src);
    await execPromise('minify dist/x-mega-menu.js > dist/x-mega-menu.min.js');
    // build css
    let vars = await fs.readFileSync('src/_variables.scss', 'utf8');
    let lines = vars.split('\n');

    await theme(lines,0,10,10,20,'blue');
    await theme(lines,10,20,20,30,'gray');
    await theme(lines,20,30,30,40,'dark');

    await fs.writeFileSync('src/_variables.scss', vars);
    await execPromise('node-sass src/x-mega-menu.scss -o dist');
    await execPromise('minify dist/x-mega-menu.css > dist/x-mega-menu.min.css');

    src = fs.readFileSync('dist/x-mega-menu.min.js', 'utf8');
    fs.writeFileSync('dist/x-mega-menu.min.js', copyright + src);

    console.log('- build successfully...');

}

Compress();