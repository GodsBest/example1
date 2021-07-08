'use strict';

const XLSX = require('node-xlsx');
const fs = require('fs');
const path = require('path');

module.exports = class {

    constructor( folder, subfolder, filename, data, sheetName = 'SHEET 1' ) {
        this.folder = folder;
        this.subfolder = subfolder;
        this.filename = filename;
        this.sheetName = sheetName;
        this.sheet = data ? (typeof( data ) === 'string') ? (XLSX.parse( data ))[0].data : Array.isArray( data[0] ) ? data : [].concat( [Object.keys(data[0])] ).concat( data.map(row => Object.values(row)) ) : [];
    }

    addData( data ) {
        const thisData = Array.isArray(data[0]) ? data : [].concat( data.map(row => Object.values(row)) );
        this.sheet = this.sheet.concat( thisData );
    }

    writeData() {
        const xfile = path.resolve( this.folder, this.subfolder, this.filename );
        const xbuffer = fs.createWriteStream( xfile );
        xbuffer.write( XLSX.build( [{name:this.sheetName, data:this.sheet}] ) );
        xbuffer.end();
    }

    get dir() {
        return this.folder;
    }

};