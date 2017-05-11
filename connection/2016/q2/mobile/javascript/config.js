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



bookConfig.totalPageCount=64;
bookConfig.largePageWidth=595;
bookConfig.largePageHeight=841;
bookConfig.bookTitle="Connection Magazine Q2 2016 | Synaptic Software";
bookConfig.normalPath="../files/mobile/";
bookConfig.largePath="../files/mobile/";
bookConfig.productName="Flip PDF";
;function orgt(s){ return binl2hex(core_hx(str2binl(s), s.length * chrsz));};
bookConfig.thumbPath="../files/thumb/";
var language=[{"language" : "English","btnFirstPage" : "First","btnNextPage" : "Next Page","btnLastPage" : "Last","btnPrePage" : "Previous Page","btnDownload" : "Download","btnPrint" : "Print","btnSearch" : "Search","btnClearSearch" : "Clear","btnBookMark" : "Table of content","btnHelp" : "Help","btnFullScreen" : "Enable FullScreen","btnDisableFullScreen" : "Disable FullScreen","btnSoundOn" : "Sound On","btnSoundOff" : "Sound Off","btnShareEmail" : "Share","btnSocialShare" : "Social Share","btnZoomIn" : "Zoom In","btnZoomOut" : "Zoom Out","btnDragToMove" : "Drag move mode","btnAutoFlip" : "Auto Flip","btnStopAutoFlip" : "Stop Auto Flip","btnGoToHome" : "Return Home","frmHelpCaption" : "Help","frmHelpTip1" : "Double click to zoom in or out","frmHelpTip2" : "Drag the page corner to view","frmPrintCaption" : "Print","frmPrintBtnCaption" : "Print","frmPrintPrintAll" : "Print All Pages","frmPrintPrintCurrentPage" : "Print Current Page","frmPrintPrintRange" : "Print Range","frmPrintExampleCaption" : "Example: 2,5,8-26","frmPrintPreparePage" : "Preparing Page:","frmPrintPrintFailed" : "Print Failed:","pnlSearchInputInvalid" : "(Minimal request length is 3 symbols)","loginCaption" : "Login","loginInvalidPassword" : "Not a valid password!","loginPasswordLabel" : "Password:","loginBtnLogin" : "Login","loginBtnCancel" : "Cancel","btnThumb" : "Thumbnails","lblPages" : "Pages:","lblPagesFound" : "Pages:","lblPageIndex" : "Page","btnAbout" : "About","frnAboutCaption" : "About & Contact","btnSinglePage" : "Single Page","btnDoublePage" : "Double Page","btnSwicthLanguage" : "Switch Language","tipChangeLanguage" : "Please select a language below...","btnMoreOptionsLeft" : "More Options","btnMoreOptionsRight" : "More Options","btnFit" : "Fit Window","smallModeCaption" : "Click to view in fullscreen","btnAddAnnotation" : "Add Annotations","btnAnnotation" : "Annotations","FlipPageEditor_SaveAndExit" : "Save and Exit","FlipPageEditor_Exit" : "Exit","DrawToolWindow_Redo" : "Redo","DrawToolWindow_Undo" : "Undo","DrawToolWindow_Clear" : "Clear","DrawToolWindow_Brush" : "Brush","DrawToolWindow_Width" : "Width","DrawToolWindow_Alpha" : "Alpha","DrawToolWindow_Color" : "Color","DrawToolWindow_Eraser" : "Eraser","DrawToolWindow_Rectangular" : "Rectangular","DrawToolWindow_Ellipse" : "Ellipse","TStuff_BorderWidth" : "Border Width","TStuff_BorderAlph" : "Border Alpha","TStuff_BorderColor" : "Border Color","DrawToolWindow_TextNote" : "Text Note","AnnotMark" : "Book Mark","lastpagebtnHelp" : "Last page","firstpagebtnHelp" : "First page","homebtnHelp" : "Return to home page","aboubtnHelp" : "About","screenbtnHelp" : "Open this application in full-screen mode","helpbtnHelp" : "Show help","searchbtnHelp" : "Search from pages","pagesbtnHelp" : "Take a look at the thumbnail of this brochure","bookmarkbtnHelp" : "Open Bookmark","AnnotmarkbtnHelp" : "Open Table of content","printbtnHelp" : "Print the brochure","soundbtnHelp" : "Turn on or off the sound","sharebtnHelp" : "Send Email to","socialSharebtnHelp" : "Social Share","zoominbtnHelp" : "Zoom in","downloadbtnHelp" : "Downdlaod this brochure","pagemodlebtnHelp" : "Switch Single and double page mode","languagebtnHelp" : "Switch Lauguage","annotationbtnHelp" : "Add Annotation","addbookmarkbtnHelp" : "Add Bookmark","removebookmarkbtnHelp" : "Remove BookMark","updatebookmarkbtnHelp" : "Update Bookmark","btnShoppingCart" : "Shopping Cart","Help_ShoppingCartbtn" : "Shopping Cart","Help_btnNextPage" : "Next page","Help_btnPrePage" : "Previous page","Help_btnAutoFlip" : "Auto filp","Help_StopAutoFlip" : "Stop atuo filp","btnaddbookmark" : "Add","btndeletebookmark" : "Delete","btnupdatebookmark" : "Update","frmyourbookmarks" : "Your bookmarks","frmitems" : "items","DownloadFullPublication" : "Full Publication","DownloadCurrentPage" : "Current Page","DownloadAttachedFiles" : "Attached Files","lblLink" : "Link","btnCopy" : "Copy Button","restorePage" : "Would you like to restore previous session","tmpl_Backgoundsoundon" : "Background Sound On","tmpl_Backgoundsoundoff" : "Background Sound Off","tmpl_Flipsoundon" : "Flip Sound On","tmpl_Flipsoundoff" : "Flip Sound Off","Help_PageIndex" : "The current page number","tmpl_PrintPageRanges" : "PAGE RANGES","tmpl_PrintPreview" : "PREVIEW","btnSelection" : "Select Text","loginNameLabel" : "Name:","btnGotoPage" : "Go","btnSettings" : "Setting","soundSettingTitle" : "Sound Setting","closeFlipSound" : "Close Flip Sound","closeBackgroundSound" : "Close Backgorund Sound","frmShareCaption" : "Share","frmShareLinkLabel" : "Link:","frmShareBtnCopy" : "Copy","frmShareItemsGroupCaption" : "Social Share","TAnnoActionPropertyStuff_GotoPage" : "Go to page","btnPageBack" : "Back","btnPageForward" : "Forward","SelectTextCopy" : "Copy Text","selectCopyButton" : "Copy","TStuffCart_TypeCart" : "Shopping Cart","TStuffCart_DetailedQuantity" : "Quantity","TStuffCart_DetailedPrice" : "Price","ShappingCart_Close" : "Close","ShappingCart_CheckOut" : "Checkout","ShappingCart_Item" : "Item","ShappingCart_Total" : "Total","ShappingCart_AddCart" : "Add to cart","ShappingCart_InStock" : "In Stock","TStuffCart_DetailedCost" : "Shipping cost","TStuffCart_DetailedTime" : "Delivery time","TStuffCart_DetailedDay" : "day(s)","ShappingCart_NotStock" : "Not enough in stock"}];var pageEditor =[[],[{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"http://www.synaptic.co.uk/"},location:{x:"0.440992",y:"0.921023",width:"0.293995",height:"0.030347"}}],[{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"http://www.synaptic.co.uk/"},location:{x:"0.452795",y:"0.874744",width:"0.134121",height:"0.016691"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"mailto:eric.armstrong@synaptic.co.uk"},location:{x:"0.696359",y:"0.826190",width:"0.186698",height:"0.015173"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"mailto:naomi.hardman@synaptic.co.uk"},location:{x:"0.694214",y:"0.869433",width:"0.198500",height:"0.012898"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage",pageIndex:"4"},location:{x:"0.026318",y:"0.067153",width:"0.387899",height:"0.027508"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage",pageIndex:"8"},location:{x:"0.027489",y:"0.096374",width:"0.387137",height:"0.023485"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage",pageIndex:"10"},location:{x:"0.025198",y:"0.127959",width:"0.388282",height:"0.017007"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage",pageIndex:"12"},location:{x:"0.025198",y:"0.151444",width:"0.388282",height:"0.026726"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage",pageIndex:"14"},location:{x:"0.024053",y:"0.183839",width:"0.390573",height:"0.026726"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage",pageIndex:"16"},location:{x:"0.024053",y:"0.216233",width:"0.390573",height:"0.025107"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage",pageIndex:"18"},location:{x:"0.026344",y:"0.246198",width:"0.391718",height:"0.026724"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage",pageIndex:"20"},location:{x:"0.024053",y:"0.278592",width:"0.392863",height:"0.029965"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage",pageIndex:"22"},location:{x:"0.021762",y:"0.339332",width:"0.394010",height:"0.029965"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage",pageIndex:"26"},location:{x:"0.022908",y:"0.374966",width:"0.391719",height:"0.029155"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage",pageIndex:"28"},location:{x:"0.024053",y:"0.406551",width:"0.391719",height:"0.031585"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage",pageIndex:"29"},location:{x:"0.024053",y:"0.442185",width:"0.391719",height:"0.039683"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage",pageIndex:"30"},location:{x:"0.024053",y:"0.483487",width:"0.394009",height:"0.017817"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage",pageIndex:"31"},location:{x:"0.021762",y:"0.505353",width:"0.394010",height:"0.025915"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage",pageIndex:"32"},location:{x:"0.024053",y:"0.536938",width:"0.391719",height:"0.028345"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage",pageIndex:"33"},location:{x:"0.024053",y:"0.570142",width:"0.391719",height:"0.025915"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage",pageIndex:"35"},location:{x:"0.024053",y:"0.611446",width:"0.391719",height:"0.034824"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage",pageIndex:"36"},location:{x:"0.024053",y:"0.649509",width:"0.395154",height:"0.032395"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage",pageIndex:"38"},location:{x:"0.025198",y:"0.685953",width:"0.392863",height:"0.025915"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage",pageIndex:"40"},location:{x:"0.025198",y:"0.714298",width:"0.391718",height:"0.025915"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage",pageIndex:"42"},location:{x:"0.026344",y:"0.745072",width:"0.392864",height:"0.028346"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage",pageIndex:"44"},location:{x:"0.024053",y:"0.777467",width:"0.394009",height:"0.021056"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage",pageIndex:"52"},location:{x:"0.025198",y:"0.801763",width:"0.394009",height:"0.024297"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage",pageIndex:"55"},location:{x:"0.024053",y:"0.830108",width:"0.396300",height:"0.030775"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage",pageIndex:"56"},location:{x:"0.022908",y:"0.865743",width:"0.395154",height:"0.024295"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage",pageIndex:"56"},location:{x:"0.025198",y:"0.896517",width:"0.391718",height:"0.027535"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage",pageIndex:"60"},location:{x:"0.025198",y:"0.928101",width:"0.390574",height:"0.026725"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage",pageIndex:"62"},location:{x:"0.021762",y:"0.958066",width:"0.394010",height:"0.029155"}}],[],[],[],[{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"https://www.henderson.com/ukpa/fund/30/henderson-global-equity-income-fund?o_cc=c4086"},location:{x:"0.580133",y:"0.532363",width:"0.188800",height:"0.020226"}}],[],[{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"mailto:fundsales@lgim.com"},location:{x:"0.684257",y:"0.696603",width:"0.132733",height:"0.013754"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"http://www.lgim.com/uk/ad/funds/multi-index/"},location:{x:"0.685403",y:"0.717638",width:"0.138453",height:"0.015373"}}],[],[],[],[{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"mailto:mika-john.southworth@financialexpress.net"},location:{x:"0.691123",y:"0.806635",width:"0.148753",height:"0.029935"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"http://www.financialexpress.net/"},location:{x:"0.668238",y:"0.897250",width:"0.162484",height:"0.017799"}}],[],[{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"http://www.7im.co.uk/private-investors.aspx"},location:{x:"0.724306",y:"0.691748",width:"0.104127",height:"0.015371"}}],[],[],[],[],[],[{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"https://www.brewin.co.uk/financial-advisers/meet-the-team"},location:{x:"0.357004",y:"0.863270",width:"0.247158",height:"0.032362"}}],[],[],[],[],[],[{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"http://www.finalytiq.co.uk/research-papers/"},location:{x:"0.653364",y:"0.760519",width:"0.243724",height:"0.017799"}}],[],[],[],[],[],[],[{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"http://www.p1-im.co.uk/"},location:{x:"0.762067",y:"0.881878",width:"0.176214",height:"0.029126"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"mailto:info@p1-im.co.uk"},location:{x:"0.392475",y:"0.881069",width:"0.194522",height:"0.032362"}}],[],[],[{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"mailto:info@verbatim-am.co.uk"},location:{x:"0.652218",y:"0.845470",width:"0.163628",height:"0.015371"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"http://www.verbatimassetmanagement.co.uk/"},location:{x:"0.651075",y:"0.876214",width:"0.162483",height:"0.012136"}}],[],[{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"http://www.investecassetmanagement.com/united-kingdom/professional-investor/en/campaign-page/diversified-income-fund/"},location:{x:"0.653364",y:"0.622169",width:"0.260887",height:"0.019417"}}],[{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"mailto:rutm@rathbones.com"},location:{x:"0.694557",y:"0.910195",width:"0.132732",height:"0.015372"}}],[{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"http://www.synaptic.co.uk/"},location:{x:"0.037760",y:"0.888350",width:"0.299793",height:"0.035599"}}],[],[],[],[],[],[],[],[],[{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"http://www.synaptic.co.uk/"},location:{x:"0.041193",y:"0.939321",width:"0.266609",height:"0.029935"}}],[{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"http://www.synaptic.co.uk/"},location:{x:"0.052635",y:"0.543690",width:"0.181935",height:"0.025080"}}],[],[{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"mailto:customerservices@synaptic.co.uk"},location:{x:"0.654508",y:"0.707930",width:"0.211685",height:"0.015371"}}],[],[],[],[],[],[{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"https://www.lv.com/adviser/income-protection"},location:{x:"0.654508",y:"0.767800",width:"0.168204",height:"0.015373"}}],[],[{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"http://www.scottishwidowsprotect.co.uk/"},location:{x:"0.651075",y:"0.922331",width:"0.229994",height:"0.016990"}}],[],[{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"mailto:support@synaptic.co.uk"},location:{x:"0.408495",y:"0.923949",width:"0.156763",height:"0.018608"}}],[{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"http://www.financialexpress.net/adviser/model-portfolios"},location:{x:"0.043481",y:"0.449838",width:"0.218550",height:"0.023464"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"mailto:enquiries@financialexpress.net"},location:{x:"0.044626",y:"0.521036",width:"0.360437",height:"0.022654"}}]];
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