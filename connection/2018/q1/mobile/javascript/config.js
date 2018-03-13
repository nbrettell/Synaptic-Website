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
btnLanguage:["btnSwicthLanguage"],
btnTableOfContent:["btnBookMark"]
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
bookConfig.appLogoIcon="./files/mobile-ext/appLogoIcon.png";
bookConfig.appLogoLinkURL="http://www.capitafinancialsoftware.co.uk";
bookConfig.appLogoOpenWindow="Blank";
bookConfig.logoHeight="40";
bookConfig.logoPadding="20";
bookConfig.logoTop="0";
bookConfig.toolbarColor="#FFFFFF";
bookConfig.iconColor="#191919";
bookConfig.pageNumColor="#191919";
bookConfig.iconFontColor="#191919";
bookConfig.toolbarAlwaysShow="YES";
bookConfig.InstructionsButtonVisible="Show";
bookConfig.showInstructionOnStart="No";
bookConfig.QRCode="Hide";
bookConfig.HomeButtonVisible="YES";
bookConfig.HomeURL="%first page%";
bookConfig.enablePageBack="Hide";
bookConfig.ShareButtonVisible="Show";
bookConfig.EmailButtonVisible="Show";
bookConfig.btnShareWithEmailBody="\{link\}";
bookConfig.ThumbnailsButtonVisible="Show";
bookConfig.thumbnailColor="#333333";
bookConfig.thumbnailAlpha="70";
bookConfig.BookMarkButtonVisible="YES";
bookConfig.TableOfContentButtonVisible="Show";
bookConfig.bookmarkBackground="#000000";
bookConfig.bookmarkFontColor="#CCCCCC";
bookConfig.SearchButtonVisible="Show";
bookConfig.leastSearchChar="3";
bookConfig.searchFontColor="#FFFFFF";
bookConfig.searchHightlightColor="#FDC606";
bookConfig.SelectTextButtonVisible="Hide";
bookConfig.PrintButtonVisible="No";
bookConfig.BackgroundSoundButtonVisible="NO";
bookConfig.FlipSound="NO";
bookConfig.BackgroundSoundLoop="-1";
bookConfig.AutoPlayButtonVisible="Yes";
bookConfig.autoPlayAutoStart="No";
bookConfig.autoPlayDuration="3";
bookConfig.autoPlayLoopCount="1";
bookConfig.ZoomButtonVisible="Yes";
bookConfig.minZoomWidth="403";
bookConfig.minZoomHeight="518";
bookConfig.mouseWheelFlip="yes";
bookConfig.DownloadButtonVisible="Hide";
bookConfig.PhoneButtonVisible="Hide";
bookConfig.AnnotationButtonVisible="Hide";
bookConfig.FullscreenButtonVisible="Show";
bookConfig.bgBeginColor="#E6E6E6";
bookConfig.bgEndColor="#CECECE";
bookConfig.bgMRotation="90";
bookConfig.backgroundPosition="Stretch";
bookConfig.backgroundOpacity="100";
bookConfig.LeftShadowWidth="90";
bookConfig.LeftShadowAlpha="0.6";
bookConfig.RightShadowWidth="55";
bookConfig.RightShadowAlpha="0.6";
bookConfig.ShowTopLeftShadow="Yes";
bookConfig.HardPageEnable="No";
bookConfig.hardCoverBorderWidth="8";
bookConfig.borderColor="#572F0D";
bookConfig.outerCoverBorder="Yes";
bookConfig.cornerRound="8";
bookConfig.leftMarginOnMobile="0";
bookConfig.topMarginOnMobile="0";
bookConfig.rightMarginOnMobile="0";
bookConfig.bottomMarginOnMobile="0";
bookConfig.pageBackgroundColor="#FFFFFF";
bookConfig.flipshortcutbutton="Show";
bookConfig.BindingType="side";
bookConfig.RightToLeft="No";
bookConfig.flippingTime="0.3";
bookConfig.retainBookCenter="Yes";
bookConfig.FlipStyle="Flip";
bookConfig.autoDoublePage="Yes";
bookConfig.isTheBookOpen="No";
bookConfig.thicknessWidthType="thick";
bookConfig.thicknessColor="#FFFFFF";
bookConfig.topMargin="10";
bookConfig.bottomMargin="10";
bookConfig.leftMargin="10";
bookConfig.rightMargin="10";
bookConfig.maxWidthToSmallMode="400";
bookConfig.maxHeightToSmallMode="300";
bookConfig.leftRightPnlShowOption="None";
bookConfig.LinkDownColor="#800080";
bookConfig.LinkAlpha="0.2";
bookConfig.OpenWindow="Blank";
bookConfig.showLinkHint="No";
bookConfig.googleAnalyticsID="UA-27996963-1";

bookConfig.macBookVersion = "GMQatrMPQbusHCednoHCdcprNDVbrmDHfUkhPPUZhnGLYUinGHaaukOJdSjuFNeXvnENTTonOCQbsgDFYdhjOG19c1Fdb8_";
bookConfig.Html5Template = "Metro";
bookConfig.UIBaseURL="mobile/";
bookConfig.isFlipPdf=false;
bookConfig.searchTextJS="mobile/javascript/search_config.js";
bookConfig.searchPositionJS="mobile/javascript/text_position[1].js";
bookConfig.totalPageCount=56;
bookConfig.largePageWidth=595;
bookConfig.largePageHeight=841;
bookConfig.bookTitle="Connection Magazine Q1 2018 | Synaptic Software";
bookConfig.normalPath="./files/mobile/";
bookConfig.largePath="./files/mobile/";
bookConfig.productName="Flip PDF Professional";
bookConfig.MidBgColor="#f8ecff";
bookConfig.bookmarkCR = "d2cf2aa5109f395d04c3e221cb47c24867dac395";
;function orgt(s){ return binl2hex(core_hx(str2binl(s), s.length * chrsz));};
bookConfig.thumbPath="./files/thumb/";
var language=[{"language" : "English","btnFirstPage" : "First","btnNextPage" : "Next Page","btnLastPage" : "Last","btnPrePage" : "Previous Page","btnDownload" : "Download","btnPrint" : "Print","btnSearch" : "Search","btnClearSearch" : "Clear","frmSearchPrompt" : "Clear","btnBookMark" : "Table of content","btnHelp" : "Help","btnHome" : "Home","btnFullScreen" : "Enable FullScreen","btnDisableFullScreen" : "Disable FullScreen","btnSoundOn" : "Sound On","btnSoundOff" : "Sound Off","btnShareEmail" : "Share","btnSocialShare" : "Social Share","btnZoomIn" : "Zoom In","btnZoomOut" : "Zoom Out","btnDragToMove" : "Drag move mode","btnAutoFlip" : "Auto Flip","btnStopAutoFlip" : "Stop Auto Flip","btnGoToHome" : "Return Home","frmHelpCaption" : "Help","frmHelpTip1" : "Double click to zoom in or out","frmHelpTip2" : "Drag the page corner to view","frmPrintCaption" : "Print","frmPrintBtnCaption" : "Print","frmPrintPrintAll" : "Print All Pages","frmPrintPrintCurrentPage" : "Print Current Page","frmPrintPrintRange" : "Print Range","frmPrintExampleCaption" : "Example: 2,5,8-26","frmPrintPreparePage" : "Preparing Page:","frmPrintPrintFailed" : "Print Failed:","pnlSearchInputInvalid" : "(Minimal request length is 3 symbols)","loginCaption" : "Login","loginInvalidPassword" : "Not a valid password!","loginPasswordLabel" : "Password:","loginBtnLogin" : "Login","loginBtnCancel" : "Cancel","btnThumb" : "Thumbnails","lblPages" : "Pages:","lblPagesFound" : "Pages:","lblPageIndex" : "Page","btnAbout" : "About","frnAboutCaption" : "About & Contact","btnSinglePage" : "Single Page","btnDoublePage" : "Double Page","btnSwicthLanguage" : "Switch Language","tipChangeLanguage" : "Please select a language below...","btnMoreOptionsLeft" : "More Options","btnMoreOptionsRight" : "More Options","btnFit" : "Fit Window","smallModeCaption" : "Click to view in fullscreen","btnAddAnnotation" : "Add Annotations","btnAnnotation" : "Annotations","FlipPageEditor_SaveAndExit" : "Save and Exit","FlipPageEditor_Exit" : "Exit","DrawToolWindow_Redo" : "Redo","DrawToolWindow_Undo" : "Undo","DrawToolWindow_Clear" : "Clear","DrawToolWindow_Brush" : "Brush","DrawToolWindow_Width" : "Width","DrawToolWindow_Alpha" : "Alpha","DrawToolWindow_Color" : "Color","DrawToolWindow_Eraser" : "Eraser","DrawToolWindow_Rectangular" : "Rectangular","DrawToolWindow_Ellipse" : "Ellipse","TStuff_BorderWidth" : "Border Width","TStuff_BorderAlph" : "Border Alpha","TStuff_BorderColor" : "Border Color","DrawToolWindow_TextNote" : "Text Note","AnnotMark" : "Book Mark","lastpagebtnHelp" : "Last page","firstpagebtnHelp" : "First page","homebtnHelp" : "Return to home page","aboubtnHelp" : "About","screenbtnHelp" : "Open this application in full-screen mode","helpbtnHelp" : "Show help","searchbtnHelp" : "Search from pages","pagesbtnHelp" : "Take a look at the thumbnail of this brochure","bookmarkbtnHelp" : "Open Bookmark","AnnotmarkbtnHelp" : "Open Table of content","printbtnHelp" : "Print the brochure","soundbtnHelp" : "Turn on or off the sound","sharebtnHelp" : "Send Email to","socialSharebtnHelp" : "Social Share","zoominbtnHelp" : "Zoom in","downloadbtnHelp" : "Downdlaod this brochure","pagemodlebtnHelp" : "Switch Single and double page mode","languagebtnHelp" : "Switch Lauguage","annotationbtnHelp" : "Add Annotation","addbookmarkbtnHelp" : "Add Bookmark","removebookmarkbtnHelp" : "Remove BookMark","updatebookmarkbtnHelp" : "Update Bookmark","btnShoppingCart" : "Shopping Cart","Help_ShoppingCartbtn" : "Shopping Cart","Help_btnNextPage" : "Next page","Help_btnPrePage" : "Previous page","Help_btnAutoFlip" : "Auto filp","Help_StopAutoFlip" : "Stop atuo filp","btnaddbookmark" : "Add","btndeletebookmark" : "Delete","btnupdatebookmark" : "Update","frmyourbookmarks" : "Your bookmarks","frmitems" : "items","DownloadFullPublication" : "Full Publication","DownloadCurrentPage" : "Current Page","DownloadAttachedFiles" : "Attached Files","lblLink" : "Link","btnCopy" : "Copy Button","infCopyToClipboard" : "Your browser does not support clipboard. ","restorePage" : "Would you like to restore previous session","tmpl_Backgoundsoundon" : "Background Sound On","tmpl_Backgoundsoundoff" : "Background Sound Off","tmpl_Flipsoundon" : "Flip Sound On","tmpl_Flipsoundoff" : "Flip Sound Off","Help_PageIndex" : "The current page number","tmpl_PrintPageRanges" : "PAGE RANGES","tmpl_PrintPreview" : "PREVIEW","btnSelection" : "Select Text","loginNameLabel" : "Name:","btnGotoPage" : "Go","btnSettings" : "Setting","soundSettingTitle" : "Sound Setting","closeFlipSound" : "Close Flip Sound","closeBackgroundSound" : "Close Backgorund Sound","frmShareCaption" : "Share","frmShareLinkLabel" : "Link:","frmShareBtnCopy" : "Copy","frmShareItemsGroupCaption" : "Social Share","TAnnoActionPropertyStuff_GotoPage" : "Go to page","btnPageBack" : "Backward","btnPageForward" : "Forward","SelectTextCopy" : "Copy Selected Text","selectCopyButton" : "Copy","TStuffCart_TypeCart" : "Shopping Cart","TStuffCart_DetailedQuantity" : "Quantity","TStuffCart_DetailedPrice" : "Price","ShappingCart_Close" : "Close","ShappingCart_CheckOut" : "Checkout","ShappingCart_Item" : "Item","ShappingCart_Total" : "Total","ShappingCart_AddCart" : "Add to cart","ShappingCart_InStock" : "In Stock","TStuffCart_DetailedCost" : "Shipping cost","TStuffCart_DetailedTime" : "Delivery time","TStuffCart_DetailedDay" : "day(s)","ShappingCart_NotStock" : "Not enough in stock","btnCrop" : "Crop","btnDragButton" : "Drag","btnFlipBook" : "Flip Book","btnSlideMode" : "Slide Mode","btnSinglePageMode" : "Single Page Mode","btnVertical" : "Vertical Mode","btnHotizontal" : "Horizontal Mode","btnClose" : "Close","btnDoublePage" : "Double Page","btnBookStatus" : "Book View","checkBoxInsert" : "Insert Current Page","lblLast" : "This is the last page.","lblFirst" : "This is the first page.","lblFullscreen" : "Click to view in fullscreen","lblName" : "Name","lblPassword" : "Password","lblLogin" : "Login","lblCancel" : "Cancel","lblNoName" : "User name can not be empty.","lblNoPassword" : "Password can not be empty.","lblNoCorrectLogin" : "Please enter the correct user name and password.","btnVideo" : "VideoGallery","btnSlideShow" : "SlideShow","pnlSearchInputInvalid" : "The search text is too short.","btnDragToMove" : "Move by mouse drag","btnPositionToMove" : "Move by mouse position","lblHelp1" : "Drag the page corner to view","lblHelp2" : "Double click to zoom in, out","lblCopy" : "Copy","lblAddToPage" : "add to page","lblPage" : "Page","lblTitle" : "Title","lblEdit" : "Edit","lblDelete" : "Delete","lblRemoveAll" : "RemoveAll","tltCursor" : "cursor","tltAddHighlight" : "add highlight","tltAddTexts" : "add texts","tltAddShapes" : "add shapes","tltAddNotes" : "add notes","tltAddImageFile" : "add image file","tltAddSignature" : "add signature","tltAddLine" : "add line","tltAddArrow" : "add arrow","tltAddRect" : "add rect","tltAddEllipse" : "add ellipse","lblDoubleClickToZoomIn" : "Double click to zoom in.","frmShareCaption" : "Share","frmShareLabel" : "Share","frmShareInfo" : "You can easily share this publication to social networks.Just cilck the appropriate button below.","frminsertLabel" : "Insert to Site","frminsertInfo" : "Use the code below to embed this publication to your website.","btnQRCode" : "Click to scan QR code","btnRotateLeft" : "Rotate Left","btnRotateRight" : "Rotate Right","lblSelectMode" : "Select view mode please.","frmDownloadPreview" : "Preview","frmHowToUse" : "How To Use","lblHelpPage1" : "Move your finger to flip the book page.","lblHelpPage2" : "Zoom in by using gesture or double click on the page.","lblHelpPage3" : "Click on the logo to reach the official website of the company.","lblHelpPage4" : "Add bookmarks, use search function and auto flip the book.","lblHelpPage5" : "Switch horizontal and vertical view on mobile devices.","TTActionQuiz_PlayAgain" : "Do you wanna play it again","TTActionQuiz_Ration" : "Your ratio is","frmTelephone" : "Telephone list","btnDialing" : "Dialing","lblSelectMessage" : "Please copy the the text content in the text box","btnSelectText" : "Select Text","btnNote" : "Annotation","btnPhoneNumber" : "Telephone"}];var pageEditor =[[],[{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.064443",y:"0.921899",width:"0.301503",height:"0.021969"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"https://www.intelliflo.com/io-store"}}],[{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.371700",y:"0.875519",width:"0.143848",height:"0.013832"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"https://www.synaptic.co.uk/"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.654790",y:"0.820124",width:"0.181823",height:"0.010577"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"mailto:eric.armstrong@synaptic.co.uk"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.657621",y:"0.861686",width:"0.153053",height:"0.009765"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"mailto:marketing@synaptic.co.uk"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.031466",y:"0.110484",width:"0.284430",height:"0.023052"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage",pageIndex:"4"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.031466",y:"0.152249",width:"0.284430",height:"0.032671"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage",pageIndex:"6"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.031466",y:"0.196603",width:"0.284430",height:"0.023052"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage",pageIndex:"8"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.031466",y:"0.235462",width:"0.284430",height:"0.023052"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage",pageIndex:"10"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.031466",y:"0.275682",width:"0.284430",height:"0.023053"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage",pageIndex:"12"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.031466",y:"0.315226",width:"0.284430",height:"0.023053"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage",pageIndex:"15"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.031466",y:"0.356075",width:"0.284430",height:"0.023053"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage",pageIndex:"16"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.031466",y:"0.398111",width:"0.284430",height:"0.023052"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage",pageIndex:"18"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.031466",y:"0.437352",width:"0.284430",height:"0.023053"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage",pageIndex:"20"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.031466",y:"0.477327",width:"0.284430",height:"0.023052"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage",pageIndex:"22"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.031466",y:"0.518265",width:"0.284430",height:"0.023052"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage",pageIndex:"24"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.031466",y:"0.558413",width:"0.284430",height:"0.034869"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage",pageIndex:"26"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.031466",y:"0.606472",width:"0.284430",height:"0.046688"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage",pageIndex:"28"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.031466",y:"0.665561",width:"0.284430",height:"0.023052"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage",pageIndex:"30"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.031466",y:"0.707233",width:"0.284430",height:"0.033627"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage",pageIndex:"34"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.031466",y:"0.753937",width:"0.284430",height:"0.023053"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage",pageIndex:"36"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.032345",y:"0.795043",width:"0.284431",height:"0.023053"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage",pageIndex:"38"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.031466",y:"0.834172",width:"0.284430",height:"0.023052"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage",pageIndex:"40"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.031466",y:"0.875788",width:"0.284430",height:"0.023053"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage",pageIndex:"42"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.031466",y:"0.916160",width:"0.284430",height:"0.023052"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage",pageIndex:"44"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.031466",y:"0.954723",width:"0.284430",height:"0.014967"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage",pageIndex:"46"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.658723",y:"0.818998",width:"0.174422",height:"0.011674"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"mailto:eric.armstrong@synaptic.co.uk"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.658723",y:"0.861459",width:"0.149672",height:"0.011674"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"mailto:marketing@synaptic.co.uk"}}],[],[],[],[{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.423486",y:"0.793712",width:"0.210591",height:"0.011391"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"mailto:sales.support@janushenderson.com"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.361343",y:"0.777064",width:"0.272734",height:"0.011392"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"https://www.janushenderson.com/ukpa/campaign/109/core-multi-asset"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.424231",y:"0.793851",width:"0.207140",height:"0.011588"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"mailto:sales.support@janushenderson.com"}}],[],[{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.360193",y:"0.860873",width:"0.255471",height:"0.030920"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"https://uk.standardlifeinvestments.com/ifa/funds/focus_on_funds/myfolio.html"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.365079",y:"0.862590",width:"0.241724",height:"0.011714"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"http://www.standardlifeinvestments.com/"}}],[],[{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.652489",y:"0.884469",width:"0.166862",height:"0.013833"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"mailto:info@verbatim-am.co.uk"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.658730",y:"0.886749",width:"0.157862",height:"0.011588"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"mailto:info@verbatim-am.co.uk"}}],[],[],[{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.684711",y:"0.609445",width:"0.181823",height:"0.013833"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"https://www.langcatfinancial.co.uk/"}}],[],[],[{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.650187",y:"0.796592",width:"0.257775",height:"0.013018"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"https://www.investecassetmanagement.com/united-kingdom/professional-investor/en-gb/campaign-page/diversified-income-fund/"}}],[{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.458354",y:"0.508078",width:"0.055001",height:"0.014317"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"http://JD.com"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.581414",y:"0.566317",width:"0.040882",height:"0.011674"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"http://JD.com"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.488686",y:"0.597190",width:"0.041184",height:"0.011674"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"http://JD.com"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.565148",y:"0.628064",width:"0.041183",height:"0.011674"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"http://JD.com"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.849773",y:"0.485093",width:"0.041184",height:"0.011674"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"http://JD.com"}}],[],[{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.477523",y:"0.968932",width:"0.077643",height:"0.009080"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"http://www.airbus.com"}}],[],[],[{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.655941",y:"0.645997",width:"0.192180",height:"0.011391"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"https://www.adviserpointsofview.com/"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.771019",y:"0.690000",width:"0.082856",height:"0.013833"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"https://architas.com/"}}],[],[{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.654790",y:"0.879588",width:"0.188728",height:"0.011391"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"mailto:sales.support@bmogam.com"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.655941",y:"0.895861",width:"0.182974",height:"0.010578"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"http://www.bmogam.com/uk/intermediaries/"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.661266",y:"0.880145",width:"0.177377",height:"0.011588"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"mailto:sales.support@bmogam.com"}}],[],[],[],[{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.705426",y:"0.399517",width:"0.211742",height:"0.017088"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"https://www.brooksmacdonald.com/"}}],[],[{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.360193",y:"0.608632",width:"0.240512",height:"0.050448"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"https://www.fca.org.uk/publication/other/fs012-platforms-using-fund-supermarkets-and-wraps.pdf"}}],[{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.654790",y:"0.543538",width:"0.246266",height:"0.013833"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"mailto:david.norman@tcfinvestment.com"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.806357",y:"0.545808",width:"0.091148",height:"0.011674"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"http://nvestment.com"}}],[{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.663998",y:"0.749398",width:"0.211742",height:"0.014647"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"http://www.rsmgroup.co.uk/"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.661695",y:"0.728244",width:"0.268131",height:"0.017087"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"mailto:enquiries@rsmgroup.co.uk"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.666177",y:"0.727515",width:"0.261517",height:"0.020409"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"mailto:enquiries@rsmgroup.co.uk"}}],[],[{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.565030",y:"0.921459",width:"0.174917",height:"0.011392"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"mailto:enquiries@rsmgroup.co.uk"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.568154",y:"0.922110",width:"0.169199",height:"0.011588"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"mailto:enquiries@rsmgroup.co.uk"}}],[],[],[],[],[],[],[],[],[],[],[],[],[{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.319257",y:"0.945237",width:"0.546709",height:"0.021949"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"http://www.synaptic.co.uk/research-tools/synaptic-risk"}}],[],[],[],[],[],[],[],[{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.642132",y:"0.918644",width:"0.249718",height:"0.020342"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"mailto:sales@synaptic.co.uk"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.641478",y:"0.921659",width:"0.247254",height:"0.021190"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"mailto:sales@synaptic.co.uk"}}]]
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