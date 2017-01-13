import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "*": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "top": 0,
        "left": 0
    },
    "section": {
        "backgroundColor": "#00b4ae !important",
        "backgroundImage": "url(\"../resource/isf-BG-1920x1080.png\") !important",
        "backgroundSize": "cover",
        "backgroundRepeat": "no-repeat"
    },
    "header": {
        "position": "absolute",
        "width": "100%",
        "left": "-1%"
    },
    "contact-btn": {
        "width": 25 * vh,
        "height": 6 * vh,
        "fontSize": 2.5 * vh,
        "fontWeight": "700",
        "fontFamily": "'Source Sans Pro', sans-serif",
        "backgroundColor": "transparent",
        "color": "white",
        "border": "2px solid white",
        "borderRadius": 8
    },
    "contact-btn:hover": {
        "backgroundColor": "white",
        "color": "#00b4ae",
        "border": "2px solid transparent"
    },
    "footer": {
        "position": "absolute",
        "width": "100%",
        "top": "88%",
        "left": "1%"
    },
    "text": {
        "color": "white",
        "fontFamily": "'Source Sans Pro', sans-serif",
        "top": "10%",
        "marginLeft": "11.5%"
    },
    "text_big": {
        "fontWeight": "700",
        "fontSize": 9 * vw,
        "lineHeight": "90%"
    },
    "text_small": {
        "fontWeight": "300",
        "fontSize": 3.8 * vw
    },
    "form-style-8": {
        "fontFamily": "'Open Sans Condensed', arial, sans",
        "width": 45 * vh,
        "paddingTop": 30,
        "paddingRight": 30,
        "paddingBottom": 30,
        "paddingLeft": 30,
        "background": "#FFFFFF",
        "marginTop": 50,
        "marginRight": "auto",
        "marginBottom": 50,
        "marginLeft": "auto",
        "boxShadow": "0px 0px 15px rgba(0, 0, 0, 0.22)",
        "MozBoxShadow": "0px 0px 15px rgba(0, 0, 0, 0.22)",
        "WebkitBoxShadow": "0px 0px 15px rgba(0, 0, 0, 0.22)"
    },
    "form-style-8 h2": {
        "background": "#4D4D4D",
        "textTransform": "uppercase",
        "fontFamily": "'Open Sans Condensed', sans-serif",
        "color": "#797979",
        "fontSize": 18,
        "fontWeight": "100",
        "paddingTop": 20,
        "paddingRight": 20,
        "paddingBottom": 20,
        "paddingLeft": 20,
        "marginTop": -30,
        "marginRight": -30,
        "marginBottom": 30,
        "marginLeft": -30
    },
    "form-style-8 input[type=\"text\"]": {
        "boxSizing": "border-box",
        "WebkitBoxSizing": "border-box",
        "MozBoxSizing": "border-box",
        "outline": "none",
        "display": "block",
        "width": "100%",
        "paddingTop": 7,
        "paddingRight": 7,
        "paddingBottom": 7,
        "paddingLeft": 7,
        "border": "none",
        "borderBottom": "1px solid #ddd",
        "background": "transparent",
        "marginBottom": 10,
        "font": "1.5vh Arial, Helvetica, sans-serif",
        "height": 45
    },
    "form-style-8 input[type=\"date\"]": {
        "boxSizing": "border-box",
        "WebkitBoxSizing": "border-box",
        "MozBoxSizing": "border-box",
        "outline": "none",
        "display": "block",
        "width": "100%",
        "paddingTop": 7,
        "paddingRight": 7,
        "paddingBottom": 7,
        "paddingLeft": 7,
        "border": "none",
        "borderBottom": "1px solid #ddd",
        "background": "transparent",
        "marginBottom": 10,
        "font": "1.5vh Arial, Helvetica, sans-serif",
        "height": 45
    },
    "form-style-8 input[type=\"datetime\"]": {
        "boxSizing": "border-box",
        "WebkitBoxSizing": "border-box",
        "MozBoxSizing": "border-box",
        "outline": "none",
        "display": "block",
        "width": "100%",
        "paddingTop": 7,
        "paddingRight": 7,
        "paddingBottom": 7,
        "paddingLeft": 7,
        "border": "none",
        "borderBottom": "1px solid #ddd",
        "background": "transparent",
        "marginBottom": 10,
        "font": "1.5vh Arial, Helvetica, sans-serif",
        "height": 45
    },
    "form-style-8 input[type=\"email\"]": {
        "boxSizing": "border-box",
        "WebkitBoxSizing": "border-box",
        "MozBoxSizing": "border-box",
        "outline": "none",
        "display": "block",
        "width": "100%",
        "paddingTop": 7,
        "paddingRight": 7,
        "paddingBottom": 7,
        "paddingLeft": 7,
        "border": "none",
        "borderBottom": "1px solid #ddd",
        "background": "transparent",
        "marginBottom": 10,
        "font": "1.5vh Arial, Helvetica, sans-serif",
        "height": 45
    },
    "form-style-8 input[type=\"number\"]": {
        "boxSizing": "border-box",
        "WebkitBoxSizing": "border-box",
        "MozBoxSizing": "border-box",
        "outline": "none",
        "display": "block",
        "width": "100%",
        "paddingTop": 7,
        "paddingRight": 7,
        "paddingBottom": 7,
        "paddingLeft": 7,
        "border": "none",
        "borderBottom": "1px solid #ddd",
        "background": "transparent",
        "marginBottom": 10,
        "font": "1.5vh Arial, Helvetica, sans-serif",
        "height": 45
    },
    "form-style-8 input[type=\"search\"]": {
        "boxSizing": "border-box",
        "WebkitBoxSizing": "border-box",
        "MozBoxSizing": "border-box",
        "outline": "none",
        "display": "block",
        "width": "100%",
        "paddingTop": 7,
        "paddingRight": 7,
        "paddingBottom": 7,
        "paddingLeft": 7,
        "border": "none",
        "borderBottom": "1px solid #ddd",
        "background": "transparent",
        "marginBottom": 10,
        "font": "1.5vh Arial, Helvetica, sans-serif",
        "height": 45
    },
    "form-style-8 input[type=\"time\"]": {
        "boxSizing": "border-box",
        "WebkitBoxSizing": "border-box",
        "MozBoxSizing": "border-box",
        "outline": "none",
        "display": "block",
        "width": "100%",
        "paddingTop": 7,
        "paddingRight": 7,
        "paddingBottom": 7,
        "paddingLeft": 7,
        "border": "none",
        "borderBottom": "1px solid #ddd",
        "background": "transparent",
        "marginBottom": 10,
        "font": "1.5vh Arial, Helvetica, sans-serif",
        "height": 45
    },
    "form-style-8 input[type=\"url\"]": {
        "boxSizing": "border-box",
        "WebkitBoxSizing": "border-box",
        "MozBoxSizing": "border-box",
        "outline": "none",
        "display": "block",
        "width": "100%",
        "paddingTop": 7,
        "paddingRight": 7,
        "paddingBottom": 7,
        "paddingLeft": 7,
        "border": "none",
        "borderBottom": "1px solid #ddd",
        "background": "transparent",
        "marginBottom": 10,
        "font": "1.5vh Arial, Helvetica, sans-serif",
        "height": 45
    },
    "form-style-8 input[type=\"password\"]": {
        "boxSizing": "border-box",
        "WebkitBoxSizing": "border-box",
        "MozBoxSizing": "border-box",
        "outline": "none",
        "display": "block",
        "width": "100%",
        "paddingTop": 7,
        "paddingRight": 7,
        "paddingBottom": 7,
        "paddingLeft": 7,
        "border": "none",
        "borderBottom": "1px solid #ddd",
        "background": "transparent",
        "marginBottom": 10,
        "font": "1.5vh Arial, Helvetica, sans-serif",
        "height": 45
    },
    "form-style-8 textarea": {
        "boxSizing": "border-box",
        "WebkitBoxSizing": "border-box",
        "MozBoxSizing": "border-box",
        "outline": "none",
        "display": "block",
        "width": "100%",
        "paddingTop": 7,
        "paddingRight": 7,
        "paddingBottom": 7,
        "paddingLeft": 7,
        "border": "none",
        "borderBottom": "1px solid #ddd",
        "background": "transparent",
        "marginBottom": 10,
        "font": "1.5vh Arial, Helvetica, sans-serif",
        "height": 30 * vh,
        "resize": "none",
        "overflow": "hidden"
    },
    "form-style-8 select": {
        "boxSizing": "border-box",
        "WebkitBoxSizing": "border-box",
        "MozBoxSizing": "border-box",
        "outline": "none",
        "display": "block",
        "width": "100%",
        "paddingTop": 7,
        "paddingRight": 7,
        "paddingBottom": 7,
        "paddingLeft": 7,
        "border": "none",
        "borderBottom": "1px solid #ddd",
        "background": "transparent",
        "marginBottom": 10,
        "font": "1.5vh Arial, Helvetica, sans-serif",
        "height": 45
    },
    "form-style-8 button": {
        "MozBoxShadow": "inset 0px 1px 0px 0px #45D6D6",
        "WebkitBoxShadow": "inset 0px 1px 0px 0px #45D6D6",
        "boxShadow": "inset 0px 1px 0px 0px #e93457",
        "backgroundColor": "#e63457",
        "border": "1px solid #f94457",
        "display": "inline-block",
        "cursor": "pointer",
        "color": "#FFFFFF",
        "fontFamily": "'Open Sans Condensed', sans-serif",
        "fontSize": 1.5 * vh,
        "paddingTop": 8,
        "paddingRight": 18,
        "paddingBottom": 8,
        "paddingLeft": 18,
        "textDecoration": "none",
        "textTransform": "uppercase"
    },
    "form-style-8 a": {
        "fontSize": 1.5 * vh
    },
    "form-style-8 button:hover": {
        "background": "linear-gradient(to bottom, #f94457 5%, #f94457 100%)",
        "backgroundColor": "#f94457"
    },
    "form-style-8 a img": {
        "width": "30%"
    },
    "gmap": {
        "pointerEvents": "none",
        "width": 100 * vw,
        "height": 50 * vh
    }
});