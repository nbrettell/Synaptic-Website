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
bookConfig.loadingBackground="#242424";
bookConfig.appLogoIcon="../files/mobile-ext/appLogoIcon.png";
bookConfig.appLogoOpenWindow="Blank";
bookConfig.toolbarColor="#D9D9D9";
bookConfig.iconColor="#CCCCCC";
bookConfig.pageNumColor="#333333";
bookConfig.FlipSound="Enable";
bookConfig.QRCode="Hide";
bookConfig.logoHeight="25";
bookConfig.logoPadding="10";
bookConfig.logoTop="8";
bookConfig.HomeButtonVisible="Hide";
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
bookConfig.PrintButtonVisible="Yes";
bookConfig.BackgroundSoundButtonVisible="Enable";
bookConfig.BackgroundSoundLoop="-1";
bookConfig.AutoPlayButtonVisible="Yes";
bookConfig.autoPlayAutoStart="No";
bookConfig.autoPlayDuration="9";
bookConfig.autoPlayLoopCount="1";
bookConfig.minZoomWidth="700";
bookConfig.minZoomHeight="518";
bookConfig.mouseWheelFlip="yes";
bookConfig.DownloadButtonVisible="Hide";
bookConfig.bgBeginColor="#E2E2E2";
bookConfig.bgEndColor="#E2E2E2";
bookConfig.bgMRotation="90";
bookConfig.LeftShadowWidth="90";
bookConfig.LeftShadowAlpha="0.6";
bookConfig.RightShadowWidth="55";
bookConfig.RightShadowAlpha="0.6";
bookConfig.pageBackgroundColor="#E8E8E8";
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



bookConfig.totalPageCount=56;
bookConfig.largePageWidth=595;
bookConfig.largePageHeight=841;
bookConfig.bookTitle="Connection Magazine Q3 2015";
bookConfig.normalPath="../files/mobile/";
bookConfig.largePath="../files/mobile/";
bookConfig.productName="Flip PDF";
;function orgt(s){ return binl2hex(core_hx(str2binl(s), s.length * chrsz));};
bookConfig.thumbPath="../files/thumb/";
var language=[{"language" : "English","btnFirstPage" : "First","btnNextPage" : "Next Page","btnLastPage" : "Last","btnPrePage" : "Previous Page","btnDownload" : "Download","btnPrint" : "Print","btnSearch" : "Search","btnClearSearch" : "Clear","btnBookMark" : "Table of content","btnHelp" : "Help","btnFullScreen" : "Enable FullScreen","btnDisableFullScreen" : "Disable FullScreen","btnSoundOn" : "Sound On","btnSoundOff" : "Sound Off","btnShareEmail" : "Share","btnSocialShare" : "Social Share","btnZoomIn" : "Zoom In","btnZoomOut" : "Zoom Out","btnDragToMove" : "Drag move mode","btnAutoFlip" : "Auto Flip","btnStopAutoFlip" : "Stop Auto Flip","btnGoToHome" : "Return Home","frmHelpCaption" : "Help","frmHelpTip1" : "Double click to zoom in or out","frmHelpTip2" : "Drag the page corner to view","frmPrintCaption" : "Print","frmPrintBtnCaption" : "Print","frmPrintPrintAll" : "Print All Pages","frmPrintPrintCurrentPage" : "Print Current Page","frmPrintPrintRange" : "Print Range","frmPrintExampleCaption" : "Example: 2,5,8-26","frmPrintPreparePage" : "Preparing Page:","frmPrintPrintFailed" : "Print Failed:","pnlSearchInputInvalid" : "(Minimal request length is 3 symbols)","loginCaption" : "Login","loginInvalidPassword" : "Not a valid password!","loginPasswordLabel" : "Password:","loginBtnLogin" : "Login","loginBtnCancel" : "Cancel","btnThumb" : "Thumbnails","lblPages" : "Pages:","lblPagesFound" : "Pages:","lblPageIndex" : "Page","btnAbout" : "About","frnAboutCaption" : "About & Contact","btnSinglePage" : "Single Page","btnDoublePage" : "Double Page","btnSwicthLanguage" : "Switch Language","tipChangeLanguage" : "Please select a language below...","btnMoreOptionsLeft" : "More Options","btnMoreOptionsRight" : "More Options","btnFit" : "Fit Window","smallModeCaption" : "Click to view in fullscreen","btnAddAnnotation" : "Add Annotations","btnAnnotation" : "Annotations","FlipPageEditor_SaveAndExit" : "Save and Exit","FlipPageEditor_Exit" : "Exit","DrawToolWindow_Redo" : "Redo","DrawToolWindow_Undo" : "Undo","DrawToolWindow_Clear" : "Clear","DrawToolWindow_Brush" : "Brush","DrawToolWindow_Width" : "Width","DrawToolWindow_Alpha" : "Alpha","DrawToolWindow_Color" : "Color","DrawToolWindow_Eraser" : "Eraser","DrawToolWindow_Rectangular" : "Rectangular","DrawToolWindow_Ellipse" : "Ellipse","TStuff_BorderWidth" : "Border Width","TStuff_BorderAlph" : "Border Alpha","TStuff_BorderColor" : "Border Color","DrawToolWindow_TextNote" : "Text Note","AnnotMark" : "Book Mark","lastpagebtnHelp" : "Last page","firstpagebtnHelp" : "First page","homebtnHelp" : "Return to home page","aboubtnHelp" : "About","screenbtnHelp" : "Open this application in full-screen mode","helpbtnHelp" : "Show help","searchbtnHelp" : "Search from pages","pagesbtnHelp" : "Take a look at the thumbnail of this brochure","bookmarkbtnHelp" : "Open Bookmark","AnnotmarkbtnHelp" : "Open Table of content","printbtnHelp" : "Print the brochure","soundbtnHelp" : "Turn on or off the sound","sharebtnHelp" : "Send Email to","socialSharebtnHelp" : "Social Share","zoominbtnHelp" : "Zoom in","downloadbtnHelp" : "Downdlaod this brochure","pagemodlebtnHelp" : "Switch Single and double page mode","languagebtnHelp" : "Switch Lauguage","annotationbtnHelp" : "Add Annotation","addbookmarkbtnHelp" : "Add Bookmark","removebookmarkbtnHelp" : "Remove BookMark","updatebookmarkbtnHelp" : "Update Bookmark","btnShoppingCart" : "Shopping Cart","Help_ShoppingCartbtn" : "Shopping Cart","Help_btnNextPage" : "Next page","Help_btnPrePage" : "Previous page","Help_btnAutoFlip" : "Auto filp","Help_StopAutoFlip" : "Stop atuo filp","btnaddbookmark" : "Add","btndeletebookmark" : "Delete","btnupdatebookmark" : "Update","frmyourbookmarks" : "Your bookmarks","frmitems" : "items","DownloadFullPublication" : "Full Publication","DownloadCurrentPage" : "Current Page","DownloadAttachedFiles" : "Attached Files","lblLink" : "Link","btnCopy" : "Copy Button","restorePage" : "Would you like to restore previous session","tmpl_Backgoundsoundon" : "Background Sound On","tmpl_Backgoundsoundoff" : "Background Sound Off","tmpl_Flipsoundon" : "Flip Sound On","tmpl_Flipsoundoff" : "Flip Sound Off","Help_PageIndex" : "The current page number","tmpl_PrintPageRanges" : "PAGE RANGES","tmpl_PrintPreview" : "PREVIEW","btnSelection" : "Select Text","loginNameLabel" : "Name:","btnGotoPage" : "Go","btnSettings" : "Setting","soundSettingTitle" : "Sound Setting","closeFlipSound" : "Close Flip Sound","closeBackgroundSound" : "Close Backgorund Sound","frmShareCaption" : "Share","frmShareLinkLabel" : "Link:","frmShareBtnCopy" : "Copy","frmShareItemsGroupCaption" : "Social Share","TAnnoActionPropertyStuff_GotoPage" : "Go to page","btnPageBack" : "Back","btnPageForward" : "Forward","SelectTextCopy" : "Copy Text","selectCopyButton" : "Copy","TStuffCart_TypeCart" : "Shopping Cart","TStuffCart_DetailedQuantity" : "Quantity","TStuffCart_DetailedPrice" : "Price","ShappingCart_Close" : "Close","ShappingCart_CheckOut" : "Checkout","ShappingCart_Item" : "Item","ShappingCart_Total" : "Total","ShappingCart_AddCart" : "Add to cart","ShappingCart_InStock" : "In Stock","TStuffCart_DetailedCost" : "Shipping cost","TStuffCart_DetailedTime" : "Delivery time","TStuffCart_DetailedDay" : "day(s)","ShappingCart_NotStock" : "Not enough in stock"}];var pageEditor =[[],[{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"http://www.synaptic.co.uk"},location:{x:"0.033032",y:"0.883585",width:"0.306585",height:"0.028275"}}],[{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"http://www.synaptic.co.uk"},location:{x:"0.371901",y:"0.853916",width:"0.137298",height:"0.018850"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"mailto:eric.armstrong@synaptic.co.uk"},location:{x:"0.653161",y:"0.823755",width:"0.181284",height:"0.012252"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"mailto:naomi.hardman@synaptic.co.uk"},location:{x:"0.651827",y:"0.865226",width:"0.190616",height:"0.013194"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage",pageIndex:"4"},location:{x:"0.042655",y:"0.098963",width:"0.278592",height:"0.031104"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage",pageIndex:"6"},location:{x:"0.042909",y:"0.133686",width:"0.280252",height:"0.045509"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage",pageIndex:"10"},location:{x:"0.042909",y:"0.182988",width:"0.282934",height:"0.029392"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage",pageIndex:"12"},location:{x:"0.042909",y:"0.216172",width:"0.282934",height:"0.032237"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage",pageIndex:"14"},location:{x:"0.042909",y:"0.252202",width:"0.282934",height:"0.030340"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage",pageIndex:"16"},location:{x:"0.042909",y:"0.285385",width:"0.282934",height:"0.031288"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage",pageIndex:"18"},location:{x:"0.042909",y:"0.320466",width:"0.284275",height:"0.043614"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage",pageIndex:"20"},location:{x:"0.042909",y:"0.367872",width:"0.284275",height:"0.032237"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage",pageIndex:"22"},location:{x:"0.041568",y:"0.402953",width:"0.285616",height:"0.028444"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage",pageIndex:"24"},location:{x:"0.041568",y:"0.435190",width:"0.288297",height:"0.048354"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage",pageIndex:"26"},location:{x:"0.042909",y:"0.486388",width:"0.285616",height:"0.043614"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage",pageIndex:"29"},location:{x:"0.042909",y:"0.533794",width:"0.286956",height:"0.030340"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage",pageIndex:"30"},location:{x:"0.041568",y:"0.568875",width:"0.288297",height:"0.031288"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage",pageIndex:"31"},location:{x:"0.041568",y:"0.604903",width:"0.288297",height:"0.012326"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage",pageIndex:"34"},location:{x:"0.042909",y:"0.623867",width:"0.288298",height:"0.029391"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage",pageIndex:"35"},location:{x:"0.042909",y:"0.657999",width:"0.289639",height:"0.016117"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage",pageIndex:"40"},location:{x:"0.041568",y:"0.676961",width:"0.289639",height:"0.030340"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage",pageIndex:"42"},location:{x:"0.041568",y:"0.712042",width:"0.290980",height:"0.029392"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage",pageIndex:"44"},location:{x:"0.041568",y:"0.746175",width:"0.290980",height:"0.044562"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage",pageIndex:"46"},location:{x:"0.041568",y:"0.795477",width:"0.292320",height:"0.030340"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage",pageIndex:"48"},location:{x:"0.040228",y:"0.830557",width:"0.293661",height:"0.030340"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage",pageIndex:"50"},location:{x:"0.040228",y:"0.864690",width:"0.293661",height:"0.029392"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage",pageIndex:"52"},location:{x:"0.040228",y:"0.897874",width:"0.296342",height:"0.030340"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage",pageIndex:"54"},location:{x:"0.038887",y:"0.932007",width:"0.303047",height:"0.049303"}}],[],[],[],[],[{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"http://www.henderson.com"},location:{x:"0.386564",y:"0.335534",width:"0.129300",height:"0.019792"}}],[],[],[{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"mailto:Tahmina.Mannan@financialexpress.net"},location:{x:"0.671821",y:"0.643735",width:"0.247935",height:"0.015080"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"http://www.financialexpress.net"},location:{x:"0.673155",y:"0.720079",width:"0.155958",height:"0.013195"}}],[],[],[],[],[],[],[],[],[],[],[],[{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"http://www.adviser.royallondon.com/pensionfreedom"},location:{x:"0.491869",y:"0.317626",width:"0.318583",height:"0.016965"}}],[],[],[],[],[{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"mailto://sales@synaptic.co.uk"},location:{x:"0.427887",y:"0.497646",width:"0.133298",height:"0.014137"}}],[{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"mailto:sales@synaptic.co.uk"},location:{x:"0.666489",y:"0.948166",width:"0.134632",height:"0.016023"}}],[{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"http://risk.synaptic.co.uk"},location:{x:"0.105305",y:"0.829410",width:"0.114636",height:"0.018850"}}],[],[],[],[],[],[],[],[],[],[],[{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"mailto:clientcare@synaptic.co.uk"},location:{x:"0.079979",y:"0.710653",width:"0.170621",height:"0.017907"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"http://www.synaptic.co.uk/support"},location:{x:"0.078646",y:"0.792652",width:"0.189284",height:"0.018850"}}],[],[{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"mailto:info@whichers.com"},location:{x:"0.729141",y:"0.721964",width:"0.123966",height:"0.016965"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"http://www.whichersifa.com"},location:{x:"0.729141",y:"0.744584",width:"0.146628",height:"0.016022"}}],[],[{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"http://www.synaptic.co.uk"},location:{x:"0.177286",y:"0.716309",width:"0.130632",height:"0.018850"}}],[{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"http://7families.co.uk"},location:{x:"0.751801",y:"0.679551",width:"0.098640",height:"0.015080"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"https://facebook.com/7Families"},location:{x:"0.655827",y:"0.695573",width:"0.162622",height:"0.014138"}}],[{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"http://riskreality.co.uk/gen"},location:{x:"0.426553",y:"0.934029",width:"0.129300",height:"0.016965"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"http://LV.com/adviser"},location:{x:"0.686485",y:"0.950051",width:"0.101306",height:"0.014138"}}],[],[],[{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"http://MoneySuperMarket.com"},location:{x:"0.437217",y:"0.568334",width:"0.155958",height:"0.013195"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"http://comparethemarket.com"},location:{x:"0.361237",y:"0.599437",width:"0.155958",height:"0.012253"}}],[{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"malto:sales@synaptic.co.uk"},location:{x:"0.717143",y:"0.818100",width:"0.134632",height:"0.013195"}}],[],[{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"http://www.brightadviser.co.uk/tools-and-ideas/sales-tools/personal-critical-illness-reports/"},location:{x:"0.113303",y:"0.884076",width:"0.493202",height:"0.015080"}}],[{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"http://MoneySuperMarket.com"},location:{x:"0.654493",y:"0.647505",width:"0.162624",height:"0.017907"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"http://MoneySuperMarket.com"},location:{x:"0.654493",y:"0.720079",width:"0.163956",height:"0.017907"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"http://MoneySuperMarket.com"},location:{x:"0.363903",y:"0.873708",width:"0.159958",height:"0.013195"}}],[{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"mailto:adam.byford@synaptic.co.uk"},location:{x:"0.665157",y:"0.763435",width:"0.167956",height:"0.016964"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"http://Payingtoomuch.com"},location:{x:"0.473207",y:"0.453348",width:"0.141296",height:"0.014137"}}],[{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"http://www.synaptic.co.uk"},location:{x:"0.438551",y:"0.920833",width:"0.301252",height:"0.032045"}}]];
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