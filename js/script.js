var products = [
    {
        "image": "img/products/chocolatechip.jpg",
        "type": "Cookie",
        "name": "Chocolate Chip Cookie",
        "description": "Classic chocolate chip cookie.",
        "price": "$1.50 ea",
    },
    {
        "image": "img/products/oatmealraisin.jpg",
        "type": "Cookie",
        "name": "Oatmeal & Raisin Cookie",
        "description": "Chewy oatmeal with plump raisins.",
        "price": "$1.50 ea",
    },
    {
        "image": "img/products/doublechocolate.jpg",
        "type": "Cookie",
        "name": "Double Chocolate Cookie",
        "description": "What's better than chocolate? Double chocolate.",
        "price": "$1.50 ea",
    },
    {
        "image": "img/products/peanutbutter.jpg",
        "type": "Cookie",
        "name": "Peanut Butter",
        "description": "Peanut butter cookie with whole peanuts.",
        "price": "$1.00 ea",
    },
    {
        "image": "img/products/chocolatecake.jpg",
        "type": "Cake",
        "name": "Chocolate Cake",
        "description": "Rich chocolate ganache layered between moist chocolate sponge.",
        "price": "$20.00",
    },
    {
        "image": "img/products/carrotcake.jpg",
        "type": "Cake",
        "name": "Carrot Cake",
        "description": "If only all vegetables tasted like this amazing carrot cake!",
        "price": "$20.00",
    },
    {
        "image": "img/products/mangocheesecake.jpg",
        "type": "Cake",
        "name": "Mango Cheesecake",
        "description": "A tropical take on a classic cheesecake.",
        "price": "$26.00",
    },
    {
        "image": "img/products/lemonmeringuepie.jpg",
        "type": "Pie",
        "name": "Lemon Meringue",
        "description": "Sharp lemon with light and fluffy meringue.",
        "price": "$18.00",
    },
    {
        "image": "img/products/applepie.jpg",
        "type": "Pie",
        "name": "Apple Pie",
        "description": "Perfectly spiced apple on a flaky melt-in-your-mouth crust.",
        "price": "$16.00",
    },
    {
        "image": "img/products/blueberrypeachpie.jpg",
        "type": "Pie",
        "name": "Blueberry Peach Pie",
        "description": "Fresh blueberries and succulent peaches on a buttery crust.",
        "price": "$16.00",
    },
    {
        "image": "img/products/strawberryrhubarbpie.jpg",
        "type": "Pie",
        "name": "Strawberry Rhubarb Pie",
        "description": "The classic summer-time pie, fresh strawberries and tart rhubarb with a lattice shell.",
        "price": "$16.00",
    },
    {
        "image": "img/products/blackberrytart.jpg",
        "type": "Pie",
        "name": "Blackberry Tart",
        "description": "Juicy blackberries beautifully balance this delectable tart.",
        "price": "$16.00",
    },
    {
        "image": "img/products/gingerbread.jpg",
        "type": "Biscuit",
        "name": "Gingerbread",
        "description": "You don't need to wait for the holidays to enjoy this classic treat.",
        "price": "$1.50 ea",
    },
    {
        "image": "img/products/shortbread.jpg",
        "type": "Biscuit",
        "name": "Shortbread",
        "description": "Melt-in-your-mouth buttery goodness, the iconic Scottish biscuit.",
        "price": "$1.50 ea",
    },
    {
        "image": "img/products/teabiscuit.jpg",
        "type": "Biscuit",
        "name": "Tea Biscuit",
        "description": "Enjoy it with tea, or on its own.",
        "price": "$1.00 ea",
    },
    {
        "image": "img/products/bagel.jpg",
        "type": "Bread",
        "name": "Bagels",
        "description": "A variety of flavours freshly baked every day.",
        "price": "$0.75 ea",
    },
    {
        "image": "img/products/frenchbaguette.jpg",
        "type": "Bread",
        "name": "French Baguette",
        "description": "The iconic French bread, perfectly baked.",
        "price": "$4.00",
    },
    {
        "image": "img/products/sourdough.jpg",
        "type": "Bread",
        "name": "Sourdough",
        "description": "Made with only water, flour and a little bit of salt.",
        "price": "$4.00",
    }
];

var cities = [ "Charlottetown", "Edmonton", "Fredericton", "Halifax", "Quebec", "Regina", "St.John's", "Toronto", "Victoria", "Winnipeg", "Iqaluit", "Yellowknife", "Whitehorse" ];

function showOrderNumberBox()
{
    document.getElementById("orderNum").style.display = "block";
    document.getElementById("orderNum").setAttribute("required", true);
}

function hideOrderNumberBox()
{
    document.getElementById("orderNum").style.display = "none";
    document.getElementById("orderNum").removeAttribute("required");
}

window.onload=function()
{
    function clearChildren()
    {
        var container = document.getElementById("products");
        
        while (container.childNodes.length > 0)
        {
            container.removeChild(container.lastChild);
        }
    }

    function clearForm()
    {
        var container = document.getElementById("boxRow2");

        while (container.childNodes.length > 0)
        {
            container.removeChild(container.lastChild);
        }

        container = document.getElementById("boxRow3");

        while (container.childNodes.length > 0)
        {
            container.removeChild(container.lastChild);
        }

        container = document.getElementById("row1Box1");

        while (container.childNodes.length > 0)
        {
            container.removeChild(container.lastChild);
        }

        container = document.getElementById("row1Box2");

        while (container.childNodes.length > 0)
        {
            container.removeChild(container.lastChild);
        }
    }

    function createProductBox(index)
    {
        clearForm();
        
        var container = document.getElementById("products");
        var productBox = document.createElement("div");
        productBox.setAttribute("class", "productBox");
        productBox.setAttribute("display", "block");

        var productImg = document.createElement("img");
        var productName = document.createElement("h3");
        var productDesc = document.createElement("p");
        var productPrice = document.createElement("p");

        productImg.src = products[index].image;
        productImg.alt = products[index].name;
        productBox.appendChild(productImg);

        var productNameText = document.createTextNode(products[index].name);
        productName.appendChild(productNameText);
        productBox.appendChild(productName);

        var productDescText = document.createTextNode(products[index].description);
        productDesc.appendChild(productDescText);
        productBox.appendChild(productDesc);

        var productPriceText = document.createTextNode(products[index].price);
        productPrice.appendChild(productPriceText);
        productBox.appendChild(productPrice);

        container.appendChild(productBox);
    }
    
    function showCookies()
    {
        clearForm();
        
        var container = document.getElementById("products");
        var pageTitle = document.getElementById("pageTitle");
        
        if (pageTitle.childNodes.length > 0)
        {
            pageTitle.removeChild(pageTitle.lastChild);
        } 
        var pageTitleText = document.createTextNode("Products > Cookies");
        pageTitle.appendChild(pageTitleText);

        if (container.childNodes.length > 0)
        {
            clearChildren();
        }

        for (var i = 0; i < products.length; i++)
        {
            if (products[i].type === "Cookie")
            {
                createProductBox(i);
            }
        }
    }

    function showCakes()
    {
        clearForm();
        
        var container = document.getElementById("products");
        var pageTitle = document.getElementById("pageTitle");

        if (pageTitle.childNodes.length > 0)
        {
            pageTitle.removeChild(pageTitle.lastChild);
        } 
        var pageTitleText = document.createTextNode("Products > Cakes");
        pageTitle.appendChild(pageTitleText);

        if (container.childNodes.length > 0)
        {
            clearChildren();
        }

        for (var i = 0; i < products.length; i++)
        {
            if (products[i].type === "Cake")
            {
                createProductBox(i);
            }
        }
    }

    function showPies()
    {
        clearForm();
        
        var container = document.getElementById("products");
        var pageTitle = document.getElementById("pageTitle");
        
        if (pageTitle.childNodes.length > 0)
        {
            pageTitle.removeChild(pageTitle.lastChild);
        } 
        var pageTitleText = document.createTextNode("Products > Pies");
        pageTitle.appendChild(pageTitleText);

        if (container.childNodes.length > 0)
        {
            clearChildren();
        }

        for (var i = 0; i < products.length; i++)
        {
            if (products[i].type === "Pie")
            {
                createProductBox(i);
            }
        }
    }

    function showBiscuits()
    {
        clearForm();
        
        var container = document.getElementById("products");
        var pageTitle = document.getElementById("pageTitle");
        
        if (pageTitle.childNodes.length > 0)
        {
            pageTitle.removeChild(pageTitle.lastChild);
        } 
        var pageTitleText = document.createTextNode("Products > Biscuits");
        pageTitle.appendChild(pageTitleText);

        if (container.childNodes.length > 0)
        {
            clearChildren();
        }

        for (var i = 0; i < products.length; i++)
        {
            if (products[i].type === "Biscuit")
            {
                createProductBox(i);
            }
        }
    }

    function showBread()
    {
        clearForm();
        
        var container = document.getElementById("products");
        var pageTitle = document.getElementById("pageTitle");
        
        if (pageTitle.childNodes.length > 0)
        {
            pageTitle.removeChild(pageTitle.lastChild);
        } 
        var pageTitleText = document.createTextNode("Products > Bread");
        pageTitle.appendChild(pageTitleText);

        if (container.childNodes.length > 0)
        {
            clearChildren();
        }

        for (var i = 0; i < products.length; i++)
        {
            if (products[i].type === "Bread")
            {
                createProductBox(i);
            }
        }
    }

    function showAllProducts()
    {
        var container = document.getElementById("products");
        var pageTitle = document.getElementById("pageTitle");
        
        if (pageTitle.childNodes.length > 0)
        {
            pageTitle.removeChild(pageTitle.lastChild);
        }        
        var pageTitleText = document.createTextNode("Products > All");
        pageTitle.appendChild(pageTitleText);

        if (container.childNodes.length > 0)
        {
            clearChildren();
        }

        for (var i = 0; i < products.length; i++)
        {
            createProductBox(i);
        }
    }

    function showContact() 
    {
        clearChildren();
        clearForm();
        
        var productsBox = document.getElementById("products");
        var pageTitle = document.getElementById("pageTitle");

        if (pageTitle.childNodes.length > 0)
        {
            pageTitle.removeChild(pageTitle.lastChild);
        }

        var contactPara = document.createElement("p");

        var pageTitleText = document.createTextNode("Contact Us");
        pageTitle.appendChild(pageTitleText);

        var contactParaText = document.createTextNode("Do you have a question or a comment? A problem with your order?" 
         + " Please fill out this form and we will get back to you promptly.");
        contactPara.appendChild(contactParaText);
        productsBox.appendChild(contactPara);

        var boxRow2 = document.getElementById("boxRow2");
        var boxRow3 = document.getElementById("boxRow3");
        var row1Box1 = document.getElementById("row1Box1");
        var row1Box2 = document.getElementById("row1Box2");
                
        var nameInput = document.createElement("input");
        nameInput.setAttribute("type", "text");
        nameInput.setAttribute("id", "name");
        nameInput.setAttribute("name", "Name");
        nameInput.setAttribute("required", true);
        nameInput.setAttribute("placeholder", "Name:");

        var emailInput = document.createElement("input");
        emailInput.setAttribute("type", "email");
        emailInput.setAttribute("id", "email");
        emailInput.setAttribute("name", "Email");
        emailInput.setAttribute("required", true);
        emailInput.setAttribute("placeholder", "Email:");

        var addressInput = document.createElement("input");
        addressInput.setAttribute("type", "text");
        addressInput.setAttribute("id", "address");
        addressInput.setAttribute("name", "Address");
        addressInput.setAttribute("required", true);
        addressInput.setAttribute("placeholder", "Address:");

        var cityInput = document.createElement("input");
        cityInput.setAttribute("type", "text");
        cityInput.setAttribute("id", "city");
        cityInput.setAttribute("name", "City");
        cityInput.setAttribute("required", true);
        cityInput.setAttribute("placeholder", "City:");
        cityInput.setAttribute("list", "cities");

        var datalist = document.createElement("datalist");
        datalist.setAttribute("id", "cities");

        for (var i = 0; i < cities.length; i++)
        {
            var option = document.createElement("option");
            option.setAttribute("value", cities[i]);
            datalist.appendChild(option);
        }

        var postalCodeInput = document.createElement("input");
        postalCodeInput.setAttribute("type", "text");
        postalCodeInput.setAttribute("id", "postalCode");
        postalCodeInput.setAttribute("name", "Postal Code");
        postalCodeInput.setAttribute("required", true);
        postalCodeInput.setAttribute("placeholder", "Postal Code: (A1A-1A1 or A1A 1A1)");
        var regex = "^[A-Za-z]\d[A-Za-z][ -]?\d[A-Za-z]\d$"
        postalCodeInput.setAttribute("pattern", "^[A-Za-z]\\d[A-Za-z][ -]?\\d[A-Za-z]\\d$")

        var orderInput = document.createElement("input");
        orderInput.setAttribute("type", "text");
        orderInput.setAttribute("name", "Order Number");
        orderInput.setAttribute("id", "orderNum");
        orderInput.setAttribute("style", "display: none;");
        orderInput.setAttribute("placeholder", "Order Number:");

        var questionOption = document.createElement("input");
        questionOption.setAttribute("type", "radio")
        questionOption.setAttribute("name", "contactType");
        questionOption.setAttribute("id", "question");
        questionOption.setAttribute("required", true);
        questionOption.setAttribute("onclick", "hideOrderNumberBox();")

        var questionLabel = document.createElement("label");
        var questionLabelText = document.createTextNode("Question");
        questionLabel.appendChild(questionLabelText);

        var commentOption = document.createElement("input");
        commentOption.setAttribute("type", "radio")
        commentOption.setAttribute("name", "contactType");
        commentOption.setAttribute("id", "comment");
        commentOption.setAttribute("onclick", "hideOrderNumberBox();")

        var commentLabel = document.createElement("label");
        var commentLabelText = document.createTextNode("Comment");
        commentLabel.appendChild(commentLabelText);

        var orderOption = document.createElement("input");
        orderOption.setAttribute("type", "radio")
        orderOption.setAttribute("name", "contactType");
        orderOption.setAttribute("id", "order");
        orderOption.setAttribute("onclick", "showOrderNumberBox();");

        var orderLabel = document.createElement("label");
        var orderLabelText = document.createTextNode("Order Inquiry");
        orderLabel.appendChild(orderLabelText);

        var span1 = document.createElement("span");
        span1.appendChild(questionOption);
        span1.appendChild(questionLabel);

        var span2 = document.createElement("span");
        span2.appendChild(commentOption);
        span2.appendChild(commentLabel);

        var span3 = document.createElement("span");
        span3.appendChild(orderOption);
        span3.appendChild(orderLabel);

        var commentArea = document.createElement("textarea");
        commentArea.setAttribute("name", "Comment");
        commentArea.setAttribute("id", "textbox");
        commentArea.setAttribute("placeholder", "Please type your comment here:");

        var submitButton = document.createElement("input");
        submitButton.setAttribute("type", "submit");
        submitButton.setAttribute("name", "submitButton");
        submitButton.setAttribute("value", "Submit");

        var nameBox = document.createElement("input");
        nameBox.setAttribute("type", "text");
        nameBox.setAttribute("name", "My Name");
        nameBox.setAttribute("value", "Nenad Ostojic");
        nameBox.setAttribute("hidden", true);

        row1Box1.appendChild(nameInput);
        row1Box1.appendChild(emailInput);
        row1Box1.appendChild(addressInput);
        row1Box1.appendChild(cityInput);
        row1Box1.appendChild(postalCodeInput);

        row1Box2.appendChild(span1);
        row1Box2.appendChild(span2);
        row1Box2.appendChild(span3);
        row1Box2.appendChild(orderInput);

        boxRow2.appendChild(commentArea);

        boxRow3.appendChild(nameBox);
        boxRow3.appendChild(submitButton);
    }

    showAllProducts();

    var allProductsLink = document.getElementById("allProducts");
    allProductsLink.addEventListener("click", showAllProducts);

    var cookiesLink = document.getElementById("cookies");
    cookiesLink.addEventListener("click", showCookies);

    var cakesLink = document.getElementById("cakes");
    cakesLink.addEventListener("click", showCakes);

    var piesLink = document.getElementById("pies");
    piesLink.addEventListener("click", showPies);

    var biscuitsLink = document.getElementById("biscuits");
    biscuitsLink.addEventListener("click", showBiscuits);

    var breadLink = document.getElementById("bread");
    breadLink.addEventListener("click", showBread);

    var contactLink = document.getElementById("contact");
    contactLink.addEventListener("click", showContact)
}
