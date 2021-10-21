<script language="javascript">
                        
//===============================================
// Toolbar Features Options
//===============================================
var toolbarOptions = [ 
                       'bold', 'italic', 'underline', 'strike', 'clean',      //  Text Style
                       'blockquote'  ,                                        //  Block Quote Input
                       'code-line'   ,                                        //  Line Code Input
                       'code-block'  ,                                        //  highlightjs  - Language Code Highlight
                       'link'        ,                                        //  Link         - Input
                       'image'       , 'video'     , 'audio', 'upload',       //  Upload       - Type Input
                       'formula'     ,                                        //  KaTeX        - Math Symbol Input
                       'map'         ,                                        //  Map          - Map Input                    

                       { 'header'   : 1        }, { 'header' : 2         } ,  // ( H1     , H2     ) - Custom font header
                       { 'list'     : 'ordered'}, { 'list'   : 'bullet'  } ,  // ( ordered, bullet ) - Ordered list
                       { 'indent'   : '+1'     }, { 'indent' : '-1'      } ,  // ( +1     , -1     ) - indent/outdent
                       { 'script'   : 'sub'    }, { 'script' : 'super'   } ,  // ( sub    , super  ) - superscript/subscript
                       { 'direction': 'rtl'    }                           ,  // ( ''     , 'rtl'  ) - text direction(Toggle)
  
                       { 'align' : ['center', 'right', 'justify'       ] } ,  // [ DropDown ] - text Align 
                       { 'size'  : ['small', false, 'large', 'huge'    ] } ,  // [ DropDown ] - font Size 
                       { 'header': [1, 2, 3, 4, 5, 6                   ] } ,  // [ DropDown ] - font Header 
                       { 'font'  : ['Arial', 'Serif','Verdana','Symbol'] } ,  // [ DropDown ] - font Family 

                       { 'color' : [] }, { 'background': [] } ,               // [ Picker   ] - Color Picker
                       { 'table' : [] },                                      // [ Picker   ] - Table Picker
       
                     ];   
           

//===============================================
// Xeditor Main Options
//===============================================
var xeditorOptions = {
                       isTooltip     : true ,   // tooltip     : [true, false]
                       readOnly      : false,   // Read Only   : [true, false] - (Text Input Disabled)
                       lang          : 'ko' ,   // language    : ['ko','en'  ]
                       isSpellcheck  : false,   // spell check : [true, false]   
                       placeholder   : 'Input Youer Contents.',  
					    
                       height        : '500px'             , minHeight: '170px', maxHeight: '100%',  // Xeditor Hgight
                       width         : 'calc(100% - 50px)' , minWidth : '200PX', maxWidth : '100%',  // Xeditor Width
					     
                       mapSetting    : { // Map Setting
                                         defaultProvider: 'OpenLayers', 
                                         markerIcon     : '',
                                         markerWidth    : '26',
                                         markerHeight   : '50',
                                         startLat       : 0,
                                         startLng       : 0,
                                         Provider       : { 'Google': true, 'Naver': true, 'Kakao': true, 'OpenLayers': true }
                                       } ,
                      
                       modules       : { // Module Add
                                         syntax : true,            // [ highlightjs] - Language Code Highlight Library 
                                         formula: true,            // [ KaTeX      ] - Math library
                                         toolbar: toolbarOptions,  // [ Toolbar    ] - Toolbar Options Add
                                       },
                    };     


 //===============================================
 // Xeditor New Instance     
 //===============================================                  
 var xeditorOptions = {};  // Xeditor Options
 var xeditorFrame   = document.body.querySelector('#xeditorEX');
 var xeditor        = new Xeditor(xeditorFrame, xeditorOptions);
 

 //===============================================
 // Save HTML
 //===============================================
 function SaveEditHTML(xeditor)
 {
    var htmlData = xeditor.getContent();  // Get HTML Data
 } 

 //===============================================
 // Save TEXT
 //===============================================
 function SaveEditHTML(xeditor)
 {
    var textData = xeditor.getTexts();    // Get TEXT Data
 } 


 //===============================================
 // Read HTML
 //===============================================
 function ReadEditHTML(htmlContent)
 {
    xeditor.setContent(htmlContent);      // Set HTML Data
 } 


</script>