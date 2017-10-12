export default {
    entry: './dist/ngx-window-token.js',
    dest: './dist/bundles/ngxWindowToken.umd.js',
    format: 'umd',
    // Global namespace.
    moduleName: 'ngx.clipboard',
    // External libraries.
    external: [
        '@angular/core',
        '@angular/common',
        'rxjs/Observable',
        'rxjs/Observer'
    ],
    globals: {
        '@angular/core': 'ng.core',
        '@angular/common': 'ng.common',
        'rxjs/Observable': 'Rx',
        'rxjs/Observer': 'Rx'
    },
    onwarn: () => {
        return
    }
}