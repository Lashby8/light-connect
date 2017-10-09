module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true,
            "jsx": true
        },
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "indent": [
            "error",
            4
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "always"
        ],
        "space-before-function-paren": 0,
        "max-len": [ 2,
        {"code": 120,
        "tabWidth": 4,
        "ignoreUrls": true }],
        "newline-before-return": 2,
        "react/jsx-uses-react": "error",
        "react/jsx-uses-vars": "error",
    }

};
