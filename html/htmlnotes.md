*What is Application:- Appllication refers to software program designed to  perform specific task or function for the users.

*Types of Application:- 
1]Desktop Application:- It is also known as stand alone application. This application are limited to the particular system,desktop & data transfer is not possible in case of desktop application. we can use the desktop application without  the help of internet. The technologies we are using to create the desktop application are C,C++,Swift etc. Example:- Ms Paint, Ms Excel.
2]Web Application:- We can access the web application through browser only with the help of an internet.Data exchanges is possible in case of web application. It is not limited to particular system or desktop. The technologies we are using to create web application HTML,CSS & Java Script.
3]Mobile Application:- A mobile application is a software application, designed specifically for small use for wireless computing device example:- Instagram, Whatsapp. 

*Terminologies:- 
		 1]Web:- Interconnection of data.
		 2]Internet:- Interface between two medium through internet we can share information communicate with the help of internet connection.
  		 3]Browser:- Browser is an application used to display & locate the information on the internet. Browser are often used to accessed the webpages.
		 4]Server:- Server is the software whch process the client request & serve some response.
		 5]Webpage:- Webpage is a document written in Hypertext that you can see online using a web browser.
		 6]Websites:- Websites is a collection of webpages accessed through a web address covering a particular thing or a subject & managed by particular person or organization.


*Types of Layer in web application:-
	1]Presentation Layer:- The presentation layer is the part of the website that users can interact directly. It is typically built using technologies such as HTML,CSS & Java Script.
	2]Business Layer:- It handles the functionality & processing of data. Such as form vaildation, user authentication & server side logic. It is typically built using technologies 	such as Java,Python,Ruby,Node JS,,etc.
	3]Persistance Layer:- It stores & retrives the data such as database. It is typically built using technologies such as Oracle,MongoDB,MySQL etc.

*Static webpages:- In static webpages pages will remain same untill someone chamges it manually. In static webpages information are changed rarely. In static webpage database is not used, 		   it contents only presentation layer & business layer.

*Dynamic webpages:- In dynamic webpages contents are different for different user. In dynamic webpages information are changed frequently. In dynamic webpages database is used, it contents  		    presentation layer, business layer & persistance layer.

*HTML:-  HTML stands for Hyper Text Markup Language. It  was introduced by Tim Berners Lee in 1991. 
 			1991 - Introduction
 			1993 - Version 1
 			1995 - Version 2 
 			1997 - Version 3
 			1999 - Version 4
 			2014 - Version 5 (known as HTML5)
#HTML defination:- Creating a refernce or link which is given to the user to visualize the content or data which is created by the developer with the help pf pre-defined tags using 			   technology called HTML(Hyper Text Markup Language). The first files to be renderred on thee browseris HTML file. 

*HTML tag:- It is root tag in the HTML document.

*Head tag:- It contents the information realted to HTML document. It is placed between HTML tag & body tag.

*Body tag:- The content which we want to display on the web page we must write inside the body tag.

*Doctype HTML:-
	1]Must required code in HTML document
	2]Instruct the web browser about what version HTML page is written in.
	3]Doctype refers to Document type defination.


*Tag in HTML:- The html document is created using tags. <> with tag name creates a tag.

*Types of tag:-
	Paired tag:- it contain opening tag and closing tag.
	Unpaired tag:- it contains only opening tag or self closing tag. 
	Elements in html:- It is combination of opening tag,closing tag & content.

*Basic Tag in HTML:-
 	1]Heading Tag:- This tag's create Heading in the html document. All heading tag are paired tag & block level elements.
		There are 6 Type of heading tag:- 
		a)h1 --2em b)h2 -- 1.5em c)h3 --1.17em d)h4 --1.0em e)h5 --0.83em f)h6 --0.67em
        1em --> stands for equal to the current font size. It is a unit measurement.
	2]Paragraph tag <p>:- It is used to create a paragraph in webpage & it allows only single space between the character. Line breaks are not allowed.
	3]Pre formatted tag <pre>:- pre tag displays the content as it is written inside the tag. Line breaks & extra spaces are allowed.
	4]Div tag <div>:- It defines the division & section of the document. It acts as a container for block level containor & Inline level elements. It is a block level element.
	5]Span tag <span>:- It is a inline level element.It acts as a container for inline level elements.
	6]Image tag <img>:- It is used to insert the image into your webpage by default it takes two attributes a)src & b)alt
                        Attributes are special words used inside opening tag to control element's behaviour.
			a)src:- It is the source that specifies the path of the image document that should be 
			b)alt:- Alternative text for the image which is visible on the webpage if the image in the src is failed to fetch the path. 
				i]absoulte path:- absoulte path is directly fetching the image from browser.
				ii]relative path:- relatve pah is fetching the image from local folder with the help of image/file name.

*Formatting tags in html:-
	1]strong Or b tag:- It will display the content in bold texts. If your are using strong tag in place of b tag it will improve the search engine optimization.
	2]em Or i tag:- It will display the content in Italic font style.
	3]ims Or u tag :- It will display the content in underline.
 	4]mark tag :- It will display the content  with yellow highligted background.
	5]q tag:- It will display the content with in the double quotes.
	6]del tag:- It will display the content with strike over the content.
	7]sup:- It will display the content just above with respect to the pervious content.
	8]sub:- It will display the content just below with respect to the pervious content.
	9]small tag:- It will display the content with smaller text.

*Attributes in HTML :- Attributes provide some extra information about the html elements. It must be present in the opening tag of the html element. It comes with attribute name = attribute value or only attribute name.
		  	1]Core attribute:- There are 4 core attributes in HTML:- 
				a]id:- The value of id attribute must be unique and it targets only the individual element.
				b]class:- We can pass the same value for multiple elements in html & the class attribute targets multiple elements.
				c]title:- The title attribute create the tooltip. Tooltip is a kind of popup which pops out when the cursor is placed on the targeted element. 
				d]style:- the style attribute is used to give the style for the html element & it is also called as inline CSS,	it gives the more priority.
			2]Internationalization attributes :- 
                   lang tag:-
              			a]lang attributes defines the language of the content which is present inside the HTML element we have to pass the laguange code as a value to the lang 					attribtes. 
                  dir --> ltr --> rtf
               			b]Dir attributes defines the direction of the content which is display on the webpage.It takes two value one ltr & Atr (defult value is Atr).
      
            3] Elements specific attributes :- This Attributes are specific to the perticular element we cannot able to writte this attributes for every HTML Elements.
   				   Example:- contain two attributes.i=src & ii=alt <img src=" " alt=" ">

*Anchor tag :-The anchor tag convert the hypertest in to hyper link with the (href)attributs

*Target attributes :- Target = _blank : host the web page in the new tab 
                      Target = self :- host the web page in the same tab by defult the target value is self
                       1] Hyper tex:- hyper is the content or text that is visible on the UI . hypr text can be creater by normal basic text's. 
                       2] Hyper link :- hyper link is the text's content that host other web pages on the website.
                                        hyper link is creater with the hepl of anchor tag with <href> attributes.
                                        Example:- <a href=" "></a>

*List in HTML:- There are 3 types of list in html:
1]Ordered list:- Ordered List start with <ol>.Each item listed with the tag <li>.we can use 3 attributes in ordered list.
		i]Type:-Default value is 1. It takes input as Number,Alphabets.
		ii] Start:-The value of the start is number.
		iii] It will reverse the order.
2]Unordered List:- Unordered list start with<ul>.Each item listed with the tag <li>.It contents 1 attribute called type.
			Type:- Disc,square,circle.Default vale is Disc.
3]Description list:- Discription list start with <dl>.Each item listed with tags <dt> & <dd>.By default the description data appers with some tab space.
4]Nested list:- List inside list.

*marquee tag:- This tag creates the scrolling text or image in the html document.The default direction of marquee is right to left.
 Attributes in marquee tag:-i] Behaviour:- alternate(alt),Scrool,slide.
			   ii] Direction:- It specify the direction of the elements. the values are:- Left,Right,Up & Down.By default the value will be left.
			   ii] Height
			   iv] width
			    v] Scroll Amount:- It specify the speed of the content.Its Default value is 6,It will not take the negative value.
		       vi] Scroll Delay:- It also defines the speed of the content but the value is incraesed in the scroll delay. The speed of the content is reduced.
			  vii] Loop:- It specifies the number of times the behavioural action is performed.

*Scemantic Tags in HTML:- This tag clearly desscibes the own meaning to the browser and the developer. 

*Table in HTML:- Table is used to structure the data in the form of rows & columns.Tables start with <table> tag.Table data are inserted using 

*<tr>,<th>,<td> tag,
		 1]<tr> It is used to insert the table row in table.
		 2]<th> It is used to define the heading.
		 3]<td> It is used to insert the data.
	Attributes in table:- 
		1]Border:- It is used to give the border to the table.
		2]Cell padding:- It gives the space between the content & the border of the cell.
		3]Cell Spacing:- It gives space between the adjusten border of the cell.
		4]Colspan:- It is used to merge two or more columns into a cell.
		5]Rowspan:- It is used to merge two or more rows into a cell.
		
Forms:- HTML forms is used to get the data from user.
1]In HTML forms are created using form tag.
2]Label created using label tag.
3]Input field and text box is created using input tag.
4]Form is semantic tag & it is a block level element but all the tags which is present inside form are inline level elements.

*Input Tag:- It is used to get the data from the user.

*Label Tag:- It is used to tell the user about what data they should fill.

*for & id attribute:- The value of for attribute in label tag & id attribute in input tag  it is used to link the label and corresponding input.

*name attribute:- It acts as a container for the value attribute.It holds the entered data. name attribute should have the same value in  input type radio to make any one option to be selected. name attribute should have the same value in the input type checkbox also.

*value attribute:- It is the must required attribute in the radio,checkbox & option tag.

*Form types:- 

i]Input tag takes one attribute called type. It determines what type of data or what type of datatype to be entered in the below field.
ii]The Type attribute take values such as:- button,checkbox,color,email,file,url,image,hidden,date,month,number,radio,range,password,reset,submit,search,tel(telephone),text,time.week
iii]Text area:- It is also used to take the data from the user but line breaks are allowed in the text area. 
             Text area has 2 attributes:- 
			1]Columns(cols).
			2]Rows(row).
iv]Button:- Button tag is used to create a button. It also take type attribute & we can pass the values such as submit,reset.

v]Validation attribute:- 1]Required:- It is used to make the input field mandatory.
			2]Disabled:- It is used to make the input field disable.
			3]Placeholder:- It is used to give the finat text inside the input field.
vi]Pattern attribute:- The input pattern attribute specifies a regular expression.That the input field is checked against,when the form is submitted.

* media tags in HTML
 1]audio tags:- is used to embed sound content in your HTML document such as music nd other audio stream.
		•attribute of radio tags.
		•Its specific the audio control
		•Auto frame attribute:- its speficy that the audio will start playing as soon as it is ready. 
		•SRC :- its specify the Url of the audio file. 
		•Loop:- its specify the audio will start over again every time it is finished. 
 2]Video tag:- the tag is used to embed video content in as HTML document such as movie clip nd other. 
 3]iframe tag :- iframe is required to run webpage inside another web page it is takes attribute such as SRC ,Hight, wight ,and frame border.
 	
