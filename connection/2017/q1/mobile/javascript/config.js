	var aliasConfig = {
appName : ["", "", ""],
totalPageCount : [],
largePageWidth : [],
largePageHeight : [],
normalPath : [],
largePath : [],
thumbPath : [],

ToolBarsSettings:[],
TitleBar:[],
appLogoIcon:["appLogoIcon"],
appLogoLinkURL:["appLogoLinkURL"],
bookTitle : [],
bookDescription : [],
ButtonsBar : [],
ShareButton : [],
ShareButtonVisible : ["socialShareButtonVisible"],
ThumbnailsButton : [],
ThumbnailsButtonVisible : ["enableThumbnail"],
ZoomButton : [],
ZoomButtonVisible : ["enableZoomIn"],
FlashDisplaySettings : [],
MainBgConfig : [],
bgBeginColor : ["bgBeginColor"],
bgEndColor : ["bgEndColor"],
bgMRotation : ["bgMRotation"],
backGroundImgURL : ["mainbgImgUrl","innerMainbgImgUrl"],
pageBackgroundColor : ["pageBackgroundColor"],
flipshortcutbutton : [],
BookMargins : [],
topMargin : [],
bottomMargin : [],
leftMargin : [],
rightMargin : [],
HTMLControlSettings : [],
linkconfig : [],
LinkDownColor : ["linkOverColor"],
LinkAlpha : ["linkOverColorAlpha"],
OpenWindow : ["linkOpenedWindow"],
searchColor : [],
searchAlpha : [],
SearchButtonVisible : ["searchButtonVisible"],

productName : [],
homePage : [],
enableAutoPlay : ["autoPlayAutoStart"],
autoPlayDuration : ["autoPlayDuration"],
autoPlayLoopCount : ["autoPlayLoopCount"],
BookMarkButtonVisible : [],
googleAnalyticsID : ["googleAnalyticsID"],
OriginPageIndex : [],	
HardPageEnable : ["isHardCover"],	
UIBaseURL : [],	
RightToLeft: ["isRightToLeft"],	

LeftShadowWidth : ["leftPageShadowWidth"],	
LeftShadowAlpha : ["pageShadowAlpha"],
RightShadowWidth : ["rightPageShadowWidth"],
RightShadowAlpha : ["pageShadowAlpha"],
ShortcutButtonHeight : [],	
ShortcutButtonWidth : [],
AutoPlayButtonVisible : ["enableAutoPlay"],	
DownloadButtonVisible : ["enableDownload"],	
DownloadURL : ["downloadURL"],
HomeButtonVisible :["homeButtonVisible"],
HomeURL:['btnHomeURL'],
BackgroundSoundURL:['bacgroundSoundURL'],
//TableOfContentButtonVisible:["BookMarkButtonVisible"],
PrintButtonVisible:["enablePrint"],
toolbarColor:["mainColor","barColor"],
loadingBackground:["mainColor","barColor"],
BackgroundSoundButtonVisible:["enableFlipSound"],
FlipSound:["enableFlipSound"],
MiniStyle:["userSmallMode"],
retainBookCenter:["moveFlipBookToCenter"],
totalPagesCaption:["totalPageNumberCaptionStr"],
pageNumberCaption:["pageIndexCaptionStrs"]
};
var aliasLanguage={
frmPrintbtn:["frmPrintCaption"],
frmPrintall : ["frmPrintPrintAll"],
frmPrintcurrent : ["frmPrintPrintCurrentPage"],
frmPrintRange : ["frmPrintPrintRange"],
frmPrintexample : ["frmPrintExampleCaption"],
btnLanguage:["btnSwicthLanguage"]
}
;
	var bookConfig = {
	appName:'flippdf',
	totalPageCount : 0,
	largePageWidth : 1080,
	largePageHeight : 1440,
	normalPath : "files/page/",
	largePath : "files/large/",
	thumbPath : "files/thumb/",
	
	ToolBarsSettings:"",
	TitleBar:"",
	appLogoLinkURL:"",
	bookTitle:"FLIPBUILDER",
	bookDescription:"",
	ButtonsBar:"",
	ShareButton:"",
	
	ThumbnailsButton:"",
	ThumbnailsButtonVisible:"Show",
	ZoomButton:"",
	ZoomButtonVisible:"Yes",
	FlashDisplaySettings:"",
	MainBgConfig:"",
	bgBeginColor:"#cccccc",
	bgEndColor:"#eeeeee",
	bgMRotation:45,
	pageBackgroundColor:"#FFFFFF",
	flipshortcutbutton:"Show",
	BookMargins:"",
	topMargin:10,
	bottomMargin:10,
	leftMargin:10,
	rightMargin:10,
	HTMLControlSettings:"",
	linkconfig:"",
	LinkDownColor:"#808080",
	LinkAlpha:0.5,
	OpenWindow:"_Blank",

	BookMarkButtonVisible:'true',
	productName : 'Demo created by Flip PDF',
	homePage : 'http://www.flipbuilder.com/',
	isFlipPdf : "true",
	TableOfContentButtonVisible:"true",
	searchTextJS:'javascript/search_config.js',
	searchPositionJS:undefined
};
	
	
	


bookConfig.loadingCaption="Loading";
bookConfig.loadingCaptionColor="#DDDDDD";
bookConfig.loadingBackground="#000000";
bookConfig.appLogoIcon="../files/mobile-ext/appLogoIcon.png";
bookConfig.appLogoLinkURL="http://www.capitafinancialsoftware.co.uk";
bookConfig.appLogoOpenWindow="Blank";
bookConfig.toolbarColor="#000000";
bookConfig.iconColor="#CCCCCC";
bookConfig.pageNumColor="#333333";
bookConfig.FlipSound="NO";
bookConfig.QRCode="Hide";
bookConfig.logoHeight="25";
bookConfig.logoPadding="10";
bookConfig.logoTop="8";
bookConfig.HomeButtonVisible="NO";
bookConfig.ShareButtonVisible="Show";
bookConfig.ThumbnailsButtonVisible="Show";
bookConfig.thumbnailColor="#333333";
bookConfig.thumbnailAlpha="70";
bookConfig.ZoomButtonVisible="Yes";
bookConfig.BookMarkButtonVisible="Hide";
bookConfig.TableOfContentButtonVisible="Hide";
bookConfig.bookmarkBackground="#000000";
bookConfig.bookmarkFontColor="#CCCCCC";
bookConfig.SearchButtonVisible="Show";
bookConfig.leastSearchChar="3";
bookConfig.searchFontColor="#000000";
bookConfig.PrintButtonVisible="No";
bookConfig.BackgroundSoundButtonVisible="NO";
bookConfig.BackgroundSoundLoop="-1";
bookConfig.AutoPlayButtonVisible="Yes";
bookConfig.autoPlayAutoStart="No";
bookConfig.autoPlayDuration="3";
bookConfig.autoPlayLoopCount="1";
bookConfig.minZoomWidth="403";
bookConfig.minZoomHeight="518";
bookConfig.mouseWheelFlip="yes";
bookConfig.DownloadButtonVisible="Hide";
bookConfig.bgBeginColor="#E6E6E6";
bookConfig.bgEndColor="#CECECE";
bookConfig.bgMRotation="90";
bookConfig.LeftShadowWidth="90";
bookConfig.LeftShadowAlpha="0.6";
bookConfig.RightShadowWidth="55";
bookConfig.RightShadowAlpha="0.6";
bookConfig.pageBackgroundColor="#FFFFFF";
bookConfig.flipshortcutbutton="Show";
bookConfig.HardPageEnable="No";
bookConfig.RightToLeft="No";
bookConfig.flippingTime="0.3";
bookConfig.retainBookCenter="Yes";
bookConfig.FlipStyle="Flip";
bookConfig.showDoublePage="Yes";
bookConfig.addPaperCoil="No";
bookConfig.topMargin="10";
bookConfig.bottomMargin="10";
bookConfig.leftMargin="10";
bookConfig.rightMargin="10";
bookConfig.LinkDownColor="#800080";
bookConfig.LinkAlpha="0.2";
bookConfig.OpenWindow="Blank";
bookConfig.showLinkHint="No";
bookConfig.googleAnalyticsID="UA-27996963-1";



bookConfig.totalPageCount=48;
bookConfig.largePageWidth=595;
bookConfig.largePageHeight=841;
bookConfig.bookTitle="Connection Magazine Q1 2017 | Synaptic Software";
bookConfig.normalPath="../files/mobile/";
bookConfig.largePath="../files/mobile/";
bookConfig.productName="Flip PDF";
;function orgt(s){ return binl2hex(core_hx(str2binl(s), s.length * chrsz));};
bookConfig.thumbPath="../files/thumb/";
var language=[{"language" : "English","btnFirstPage" : "First","btnNextPage" : "Next Page","btnLastPage" : "Last","btnPrePage" : "Previous Page","btnDownload" : "Download","btnPrint" : "Print","btnSearch" : "Search","btnClearSearch" : "Clear","btnBookMark" : "Table of content","btnHelp" : "Help","btnFullScreen" : "Enable FullScreen","btnDisableFullScreen" : "Disable FullScreen","btnSoundOn" : "Sound On","btnSoundOff" : "Sound Off","btnShareEmail" : "Share","btnSocialShare" : "Social Share","btnZoomIn" : "Zoom In","btnZoomOut" : "Zoom Out","btnDragToMove" : "Drag move mode","btnAutoFlip" : "Auto Flip","btnStopAutoFlip" : "Stop Auto Flip","btnGoToHome" : "Return Home","frmHelpCaption" : "Help","frmHelpTip1" : "Double click to zoom in or out","frmHelpTip2" : "Drag the page corner to view","frmPrintCaption" : "Print","frmPrintBtnCaption" : "Print","frmPrintPrintAll" : "Print All Pages","frmPrintPrintCurrentPage" : "Print Current Page","frmPrintPrintRange" : "Print Range","frmPrintExampleCaption" : "Example: 2,5,8-26","frmPrintPreparePage" : "Preparing Page:","frmPrintPrintFailed" : "Print Failed:","pnlSearchInputInvalid" : "(Minimal request length is 3 symbols)","loginCaption" : "Login","loginInvalidPassword" : "Not a valid password!","loginPasswordLabel" : "Password:","loginBtnLogin" : "Login","loginBtnCancel" : "Cancel","btnThumb" : "Thumbnails","lblPages" : "Pages:","lblPagesFound" : "Pages:","lblPageIndex" : "Page","btnAbout" : "About","frnAboutCaption" : "About & Contact","btnSinglePage" : "Single Page","btnDoublePage" : "Double Page","btnSwicthLanguage" : "Switch Language","tipChangeLanguage" : "Please select a language below...","btnMoreOptionsLeft" : "More Options","btnMoreOptionsRight" : "More Options","btnFit" : "Fit Window","smallModeCaption" : "Click to view in fullscreen","btnAddAnnotation" : "Add Annotations","btnAnnotation" : "Annotations","FlipPageEditor_SaveAndExit" : "Save and Exit","FlipPageEditor_Exit" : "Exit","DrawToolWindow_Redo" : "Redo","DrawToolWindow_Undo" : "Undo","DrawToolWindow_Clear" : "Clear","DrawToolWindow_Brush" : "Brush","DrawToolWindow_Width" : "Width","DrawToolWindow_Alpha" : "Alpha","DrawToolWindow_Color" : "Color","DrawToolWindow_Eraser" : "Eraser","DrawToolWindow_Rectangular" : "Rectangular","DrawToolWindow_Ellipse" : "Ellipse","TStuff_BorderWidth" : "Border Width","TStuff_BorderAlph" : "Border Alpha","TStuff_BorderColor" : "Border Color","DrawToolWindow_TextNote" : "Text Note","AnnotMark" : "Book Mark","lastpagebtnHelp" : "Last page","firstpagebtnHelp" : "First page","homebtnHelp" : "Return to home page","aboubtnHelp" : "About","screenbtnHelp" : "Open this application in full-screen mode","helpbtnHelp" : "Show help","searchbtnHelp" : "Search from pages","pagesbtnHelp" : "Take a look at the thumbnail of this brochure","bookmarkbtnHelp" : "Open Bookmark","AnnotmarkbtnHelp" : "Open Table of content","printbtnHelp" : "Print the brochure","soundbtnHelp" : "Turn on or off the sound","sharebtnHelp" : "Send Email to","socialSharebtnHelp" : "Social Share","zoominbtnHelp" : "Zoom in","downloadbtnHelp" : "Downdlaod this brochure","pagemodlebtnHelp" : "Switch Single and double page mode","languagebtnHelp" : "Switch Lauguage","annotationbtnHelp" : "Add Annotation","addbookmarkbtnHelp" : "Add Bookmark","removebookmarkbtnHelp" : "Remove BookMark","updatebookmarkbtnHelp" : "Update Bookmark","btnShoppingCart" : "Shopping Cart","Help_ShoppingCartbtn" : "Shopping Cart","Help_btnNextPage" : "Next page","Help_btnPrePage" : "Previous page","Help_btnAutoFlip" : "Auto filp","Help_StopAutoFlip" : "Stop atuo filp","btnaddbookmark" : "Add","btndeletebookmark" : "Delete","btnupdatebookmark" : "Update","frmyourbookmarks" : "Your bookmarks","frmitems" : "items","DownloadFullPublication" : "Full Publication","DownloadCurrentPage" : "Current Page","DownloadAttachedFiles" : "Attached Files","lblLink" : "Link","btnCopy" : "Copy Button","restorePage" : "Would you like to restore previous session","tmpl_Backgoundsoundon" : "Background Sound On","tmpl_Backgoundsoundoff" : "Background Sound Off","tmpl_Flipsoundon" : "Flip Sound On","tmpl_Flipsoundoff" : "Flip Sound Off","Help_PageIndex" : "The current page number","tmpl_PrintPageRanges" : "PAGE RANGES","tmpl_PrintPreview" : "PREVIEW","btnSelection" : "Select Text","loginNameLabel" : "Name:","btnGotoPage" : "Go","btnSettings" : "Setting","soundSettingTitle" : "Sound Setting","closeFlipSound" : "Close Flip Sound","closeBackgroundSound" : "Close Backgorund Sound","frmShareCaption" : "Share","frmShareLinkLabel" : "Link:","frmShareBtnCopy" : "Copy","frmShareItemsGroupCaption" : "Social Share","TAnnoActionPropertyStuff_GotoPage" : "Go to page","btnPageBack" : "Back","btnPageForward" : "Forward","SelectTextCopy" : "Copy Text","selectCopyButton" : "Copy","TStuffCart_TypeCart" : "Shopping Cart","TStuffCart_DetailedQuantity" : "Quantity","TStuffCart_DetailedPrice" : "Price","ShappingCart_Close" : "Close","ShappingCart_CheckOut" : "Checkout","ShappingCart_Item" : "Item","ShappingCart_Total" : "Total","ShappingCart_AddCart" : "Add to cart","ShappingCart_InStock" : "In Stock","TStuffCart_DetailedCost" : "Shipping cost","TStuffCart_DetailedTime" : "Delivery time","TStuffCart_DetailedDay" : "day(s)","ShappingCart_NotStock" : "Not enough in stock"}];var pageEditor =[[],[{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"http://www.synaptic.co.uk/covermenow"},location:{x:"0.429740",y:"0.928505",width:"0.396480",height:"0.022578"}}],[{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"http://synaptic.co.uk/"},location:{x:"0.398276",y:"0.865251",width:"0.133266",height:"0.011823"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"mailto:eric.armstrong@synaptic.co.uk"},location:{x:"0.680009",y:"0.827273",width:"0.177855",height:"0.011106"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"mailto:naomi.hardman@synaptic.co.uk"},location:{x:"0.681022",y:"0.869908",width:"0.187484",height:"0.010748"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage",pageIndex:"4"},location:{x:"0.025298",y:"0.210391",width:"0.336102",height:"0.031516"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage",pageIndex:"6"},location:{x:"0.025374",y:"0.245201",width:"0.337116",height:"0.031611"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage",pageIndex:"8"},location:{x:"0.025374",y:"0.280229",width:"0.339534",height:"0.033320"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage",pageIndex:"10"},location:{x:"0.025374",y:"0.316967",width:"0.340741",height:"0.032465"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage",pageIndex:"12"},location:{x:"0.024166",y:"0.351995",width:"0.343159",height:"0.032466"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage",pageIndex:"14"},location:{x:"0.024166",y:"0.387023",width:"0.344367",height:"0.032466"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage",pageIndex:"16"},location:{x:"0.025374",y:"0.423761",width:"0.343159",height:"0.031611"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage",pageIndex:"18"},location:{x:"0.024166",y:"0.458790",width:"0.345575",height:"0.034174"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage",pageIndex:"20"},location:{x:"0.025374",y:"0.496382",width:"0.344367",height:"0.029902"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage",pageIndex:"22"},location:{x:"0.024166",y:"0.530556",width:"0.345575",height:"0.033319"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage",pageIndex:"24"},location:{x:"0.024166",y:"0.568148",width:"0.345575",height:"0.043572"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage",pageIndex:"28"},location:{x:"0.024166",y:"0.651020",width:"0.345575",height:"0.029903"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage",pageIndex:"30"},location:{x:"0.024166",y:"0.683486",width:"0.346783",height:"0.033319"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage",pageIndex:"32"},location:{x:"0.024166",y:"0.721078",width:"0.346783",height:"0.030757"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage",pageIndex:"34"},location:{x:"0.025374",y:"0.756106",width:"0.346784",height:"0.030757"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage",pageIndex:"36"},location:{x:"0.026583",y:"0.789426",width:"0.345576",height:"0.035028"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage",pageIndex:"38"},location:{x:"0.026583",y:"0.827018",width:"0.344366",height:"0.031611"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage",pageIndex:"40"},location:{x:"0.026583",y:"0.860338",width:"0.344366",height:"0.032465"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage",pageIndex:"42"},location:{x:"0.026583",y:"0.895366",width:"0.345576",height:"0.019650"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage",pageIndex:"26"},location:{x:"0.023213",y:"0.615073",width:"0.346978",height:"0.035418"}}],[],[{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"http://www.synaptic.co.uk/covermenow"},location:{x:"0.655921",y:"0.913453",width:"0.232832",height:"0.016933"}}],[],[{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"http://www.synaptic.co.uk/covermenow"},location:{x:"0.658582",y:"0.727188",width:"0.212874",height:"0.014111"}}],[],[],[],[{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"http://www.langcatfinancial.co.uk/platform-directory/"},location:{x:"0.659912",y:"0.916275",width:"0.271414",height:"0.015052"}}],[],[{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"https://russellinvestments.com/uk/solutions/financial-advisers"},location:{x:"0.654590",y:"0.701788",width:"0.182273",height:"0.020696"}}],[],[{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"https://finalytiq.co.uk/"},location:{x:"0.653260",y:"0.634055",width:"0.131715",height:"0.015993"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"https://twitter.com/AbrahamOnMoney"},location:{x:"0.653258",y:"0.650988",width:"0.236823",height:"0.013549"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"mailto:abraham@finalytiq.co.uk"},location:{x:"0.653351",y:"0.665086",width:"0.161606",height:"0.016379"}}],[{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"http://www.synaptic.co.uk/"},location:{x:"0.655074",y:"0.780533",width:"0.132282",height:"0.012487"}}],[{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"mailto:sales@synaptic.co.uk"},location:{x:"0.638625",y:"0.901224",width:"0.243475",height:"0.028222"}}],[],[],[],[{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"http://www.tcfinvestment.com/"},location:{x:"0.656635",y:"0.800753",width:"0.169904",height:"0.012518"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"https://twitter.com/tcfDAN"},location:{x:"0.656324",y:"0.815687",width:"0.067092",height:"0.012958"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"mailto:david.norman@tcfinvestment.com"},location:{x:"0.656324",y:"0.831061",width:"0.232648",height:"0.014715"}}],[],[{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"http://www.verbatimassetmanagement.co.uk/"},location:{x:"0.656193",y:"0.648812",width:"0.247225",height:"0.013293"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"mailto:info@verbatim-am.co.uk"},location:{x:"0.655483",y:"0.664612",width:"0.197922",height:"0.013543"}}],[],[{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"http://tavistockwealth.com/"},location:{x:"0.710077",y:"0.924384",width:"0.144229",height:"0.012621"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"https://www.linkedin.com/company/tavistock-wealth"},location:{x:"0.654028",y:"0.939530",width:"0.272037",height:"0.014136"}}],[],[{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"http://www.rsmgroup.co.uk/"},location:{x:"0.651543",y:"0.868739",width:"0.107567",height:"0.013762"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"mailto:geoff.mills@rsmgroup.co.uk"},location:{x:"0.651202",y:"0.885158",width:"0.225035",height:"0.013521"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"https://twitter.com/RSMRTweets"},location:{x:"0.703790",y:"0.900128",width:"0.097323",height:"0.012314"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"thegeoffmills"},location:{x:"0.809307",y:"0.899886",width:"0.099712",height:"0.013280"}}],[],[{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"mailto:matt.ward@akg.co.uk"},location:{x:"0.697287",y:"0.904944",width:"0.144820",height:"0.013063"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"http://www.akg.co.uk/"},location:{x:"0.706225",y:"0.920957",width:"0.102210",height:"0.012431"}}],[],[{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"https://www.financialplanningtoday.co.uk/"},location:{x:"0.676029",y:"0.691374",width:"0.223172",height:"0.014109"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"mailto:editor@financialplanningtoday.co.uk"},location:{x:"0.700465",y:"0.760770",width:"0.228465",height:"0.014397"}}],[],[],[],[{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"mailto:UK_Team@carmignac.com"},location:{x:"0.750383",y:"0.548448",width:"0.176953",height:"0.016933"}}],[],[{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"www.investecassetmanagement.com/CMF"},location:{x:"0.030601",y:"0.845720",width:"0.469655",height:"0.024459"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"mailto:enquiries@investecmail.com"},location:{x:"0.093133",y:"0.882409",width:"0.307339",height:"0.019755"}}],[],[],[],[{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"http://www.synaptic.co.uk/"},location:{x:"0.661243",y:"0.588900",width:"0.141029",height:"0.019756"}}],[],[],[],[],[],[],[{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"http://www2.landginvestments.com/l/26932/2016-09-06/5yyjt7"},location:{x:"0.041244",y:"0.855127",width:"0.204892",height:"0.015993"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"mailto:fundsales@lgim.com"},location:{x:"0.234152",y:"0.843753",width:"0.145160",height:"0.011186"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"https://twitter.com/LGIM"},location:{x:"0.251950",y:"0.855778",width:"0.053792",height:"0.015661"}}]];
;
	bookConfig.hideMiniFullscreen=true;
	if(language&&language.length>0&&language[0]&&language[0].language){
		bookConfig.language=language[0].language;
	}
	
try{
	for(var i=0;pageEditor!=undefined&&i<pageEditor.length;i++){
		if(pageEditor[i].length==0){
			continue;
		}
		for(var j=0;j<pageEditor[i].length;j++){
			var anno=pageEditor[i][j];
			if(anno==undefined)continue;
			if(anno.overAlpha==undefined){
				anno.overAlpha=bookConfig.LinkAlpha;
			}
			if(anno.outAlpha==undefined){
				anno.outAlpha=0;
			}
			if(anno.downAlpha==undefined){
				anno.downAlpha=bookConfig.LinkAlpha;
			}
			if(anno.overColor==undefined){
				anno.overColor=bookConfig.LinkDownColor;
			}
			if(anno.downColor==undefined){
				anno.downColor=bookConfig.LinkDownColor;
			}
			if(anno.outColor==undefined){
				anno.outColor=bookConfig.LinkDownColor;
			}
			if(anno.annotype=='com.mobiano.flipbook.pageeditor.TAnnoLink'){
				anno.alpha=bookConfig.LinkAlpha;
			}
		}
	}
}catch(e){
}
try{
	$.browser.device = 2;
}catch(ee){
}