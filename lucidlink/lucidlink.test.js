"@fixture lucidlink";
"@page http://localhost:3000/#/";

"@test"["allTesting"] = {
    '1.Click link "Login"': function() {
        act.click(":containsExcludeChildren(Login)");
    },
    '2.Click submit button "Login"': function() {
        act.click(".button");
    },
    '3.Click link "New order"': function() {
        act.click(":containsExcludeChildren(New order)");
    },
    "4.Click input": function() {
        var actionTarget = function() {
            return $(".container").find(" > input:nth(0)");
        };
        act.click(actionTarget);
    },
    "5.Press key BACKSPACE": function() {
        act.press("backspace");
    },
    "6.Type in input": function() {
        var actionTarget = function() {
            return $(".container").find(" > input:nth(0)");
        };
        act.type(actionTarget, "testProduct");
    },
    "7.Type in input": function() {
        var actionTarget = function() {
            return $(".container").find(" > input:nth(1)");
        };
        act.type(actionTarget, "5", {
            caretPos: 0
        });
    },
    "8.Type in input": function() {
        var actionTarget = function() {
            return $(".container").find(" > input:nth(1)");
        };
        act.type(actionTarget, "52", {
            caretPos: 0
        });
    },
    "9.Press key 2": function() {
        act.press("2");
    },
    "10.Type in input": function() {
        var actionTarget = function() {
            return $(".container").find(" > input:nth(2)");
        };
        act.type(actionTarget, ".00.2.");
    },
    "11.Press key BACKSPACE": function() {
        act.press("backspace");
    },
    "12.Type in input": function() {
        var actionTarget = function() {
            return $(".container").find(" > input:nth(2)");
        };
        act.type(actionTarget, "..2");
    },
    "13.Press key BACKSPACE": function() {
        act.press("backspace");
    },
    "14.Type in input": function() {
        var actionTarget = function() {
            return $(".container").find(" > input:nth(2)");
        };
        act.type(actionTarget, ",,.,1");
    },
    '15.Click submit button "Continue"': function() {
        act.click(":containsExcludeChildren(Continue)");
    },
    "16.Type in input": function() {
        var actionTarget = function() {
            return $(".container").find(" > div:nth(0) > input:nth(0)");
        };
        act.type(actionTarget, "testCountry");
    },
    "17.Press key TAB": function() {
        act.press("tab");
    },
    "18.Type in input": function() {
        var actionTarget = function() {
            return $(".container").find(" > div:nth(0) > input:nth(1)");
        };
        act.type(actionTarget, "testRei");
    },
    "19.Press key BACKSPACE": function() {
        act.press("backspace");
    },
    "20.Type in input": function() {
        var actionTarget = function() {
            return $(".container").find(" > div:nth(0) > input:nth(1)");
        };
        act.type(actionTarget, "gion");
    },
    "21.Press key TAB": function() {
        act.press("tab");
    },
    "22.Type in input": function() {
        var actionTarget = function() {
            return $(".container").find(" > div:nth(0) > input:nth(2)");
        };
        act.type(actionTarget, "testPostalCode");
    },
    "23.Press key TAB": function() {
        act.press("tab");
    },
    "24.Type in input": function() {
        var actionTarget = function() {
            return $(".container").find(" > div:nth(0) > input:nth(3)");
        };
        act.type(actionTarget, "testStreet");
    },
    "25.Type in input": function() {
        var actionTarget = function() {
            return $(".container").find(" > div:nth(0) > input:nth(4)");
        };
        act.type(actionTarget, "testDetails");
    },
    '26.Click submit button "Continue"': function() {
        act.click(":containsExcludeChildren(Continue)");
    },
    "27.Click select": function() {
        var actionTarget = function() {
            return $(".container").find(" > div:nth(0) > select:nth(0)");
        };
        act.click(actionTarget);
    },
    '28.Click option "Card"': function() {
        act.click(":containsExcludeChildren(Card)");
    },
    "29.Type in input": function() {
        var actionTarget = function() {
            return $(".container").find(" > div:nth(1) > input:nth(0)");
        };
        act.type(actionTarget, "testfirst");
    },
    "30.Press key TAB": function() {
        act.press("tab");
    },
    "31.Type in input": function() {
        var actionTarget = function() {
            return $(".container").find(" > div:nth(1) > input:nth(1)");
        };
        act.type(actionTarget, "testK");
    },
    "32.Press key BACKSPACE": function() {
        act.press("backspace");
    },
    "33.Type in input": function() {
        var actionTarget = function() {
            return $(".container").find(" > div:nth(1) > input:nth(1)");
        };
        act.type(actionTarget, "l");
    },
    "34.Press key BACKSPACE": function() {
        act.press("backspace");
    },
    "35.Type in input": function() {
        var actionTarget = function() {
            return $(".container").find(" > div:nth(1) > input:nth(1)");
        };
        act.type(actionTarget, "Last");
    },
    "36.Press key TAB": function() {
        act.press("tab");
    },
    "37.Type in input": function() {
        var actionTarget = function() {
            return $(".container").find(" > div:nth(1) > input:nth(2)");
        };
        act.type(actionTarget, "testca");
    },
    "38.Press key BACKSPACE": function() {
        act.press("backspace");
    },
    "39.Type in input": function() {
        var actionTarget = function() {
            return $(".container").find(" > div:nth(1) > input:nth(2)");
        };
        act.type(actionTarget, "C");
    },
    "40.Press key combination BACKSPACE+SHIFT SHIFT+C": function() {
        act.press("backspace+shift shift+c");
    },
    "41.Type in input": function() {
        var actionTarget = function() {
            return $(".container").find(" > div:nth(1) > input:nth(2)");
        };
        act.type(actionTarget, "ardNumber");
    },
    "42.Press key BACKSPACE TAB": function() {
        act.press("backspace tab");
    },
    "43.Type in input": function() {
        var actionTarget = function() {
            return $(".container").find(" > div:nth(1) > input:nth(3)");
        };
        act.type(actionTarget, "testSecD");
    },
    "44.Press key BACKSPACE": function() {
        act.press("backspace");
    },
    "45.Type in input": function() {
        var actionTarget = function() {
            return $(".container").find(" > div:nth(1) > input:nth(3)");
        };
        act.type(actionTarget, "COde");
    },
    "46.Press key TAB": function() {
        act.press("tab");
    },
    "47.Type in input": function() {
        var actionTarget = function() {
            return $(".container").find(" > div:nth(1) > input:nth(4)");
        };
        act.type(actionTarget, "testMonth");
    },
    "48.Press key BACKSPACE": function() {
        act.press("backspace");
    },
    "49.Press key BACKSPACE": function() {
        act.press("backspace");
    },
    "50.Press key BACKSPACE": function() {
        act.press("backspace");
    },
    "51.Press key BACKSPACE": function() {
        act.press("backspace");
    },
    "52.Press key BACKSPACE": function() {
        act.press("backspace");
    },
    "53.Type in input": function() {
        var actionTarget = function() {
            return $(".container").find(" > div:nth(1) > input:nth(4)");
        };
        act.type(actionTarget, "eE");
    },
    "54.Press key combination BACKSPACE+SHIFT SHIFT+E": function() {
        act.press("backspace+shift shift+e");
    },
    "55.Type in input": function() {
        var actionTarget = function() {
            return $(".container").find(" > div:nth(1) > input:nth(4)");
        };
        act.type(actionTarget, "p");
    },
    "56.Press key BACKSPACE BACKSPACE": function() {
        act.press("backspace backspace");
    },
    "57.Type in input": function() {
        var actionTarget = function() {
            return $(".container").find(" > div:nth(1) > input:nth(4)");
        };
        act.type(actionTarget, "xpirationMonth");
    },
    "58.Type in input": function() {
        var actionTarget = function() {
            return $(".container").find(" > div:nth(1) > input:nth(5)");
        };
        act.type(actionTarget, "testExpYear");
    },
    "59.Type in input": function() {
        var actionTarget = function() {
            return $(".container").find(" > div:nth(1) > input:nth(6)");
        };
        act.type(actionTarget, "testBillingAddress");
    },
    '60.Click submit button "Go Back"': function() {
        act.click(":containsExcludeChildren(Go Back)");
    },
    "61.Hover over input": function() {
        var actionTarget = function() {
            return $(".container").find(" > div:nth(0) > input:nth(0)");
        };
        act.hover(actionTarget);
    },
    "62.Assert": function() {
        eq($(".container").find(" > div:nth(0) > input:nth(0)").val(), "testCountry");
        eq($(".container").find(" > div:nth(0) > input:nth(1)").val(), "testRegion");
        eq($(".container").find(" > div:nth(0) > input:nth(2)").val(), "testPostalCode");
        eq($(".container").find(" > div:nth(0) > input:nth(4)").val(), "testDetails");
        eq($(".container").find(" > div:nth(0) > input:nth(3)").val(), "testStreet");
    },
    "63.Click input": function() {
        var actionTarget = function() {
            return $(".container").find(" > div:nth(0) > input:nth(1)");
        };
        act.click(actionTarget);
    },
    '64.Click submit button "Go Back"': function() {
        act.click(":containsExcludeChildren(Go Back)");
    },
    "65.Assert": function() {
        eq($(".container").find(" > input:nth(0)").val(), "testProduct");
        eq($(".container").find(" > input:nth(1)").val(), "5");
        eq($(".container").find(" > input:nth(2)").val(), "1999");
        eq($(":containsExcludeChildren(9995)").text(), "9995");
    },
    '66.Click submit button "Continue"': function() {
        act.click(":containsExcludeChildren(Continue)");
    },
    "67.Assert": function() {
        eq($(".container").find(" > div:nth(0) > input:nth(0)").val(), "testCountry");
        eq($(".container").find(" > div:nth(0) > input:nth(1)").val(), "testRegion");
        eq($(".container").find(" > div:nth(0) > input:nth(2)").val(), "testPostalCode");
        eq($(".container").find(" > div:nth(0) > input:nth(3)").val(), "testStreet");
        eq($(".container").find(" > div:nth(0) > input:nth(4)").val(), "testDetails");
    },
    '68.Click submit button "Continue"': function() {
        act.click(":containsExcludeChildren(Continue)");
    },
    '69.Click div "First Name:"': function() {
        act.click(":containsExcludeChildren(First Name)");
    },
    "70.Click select": function() {
        var actionTarget = function() {
            return $(".container").find(" > div:nth(0) > select:nth(0)");
        };
        act.click(actionTarget);
    },
    "71.Type in input": function() {
        var actionTarget = function() {
            return $(".container").find(" > div:nth(1) > input:nth(0)");
        };
        act.type(actionTarget, "testCardName");
    },
    "72.Press key TAB": function() {
        act.press("tab");
    },
    "73.Type in input": function() {
        var actionTarget = function() {
            return $(".container").find(" > div:nth(1) > input:nth(1)");
        };
        act.type(actionTarget, "testca");
    },
    "74.Press key BACKSPACE": function() {
        act.press("backspace");
    },
    "75.Press key combination SHIFT+BACKSPACE": function() {
        act.press("shift+backspace");
    },
    "76.Type in input": function() {
        var actionTarget = function() {
            return $(".container").find(" > div:nth(1) > input:nth(1)");
        };
        act.type(actionTarget, "CardLastName");
    },
    "77.Press key TAB": function() {
        act.press("tab");
    },
    "78.Type in input": function() {
        var actionTarget = function() {
            return $(".container").find(" > div:nth(1) > input:nth(2)");
        };
        act.type(actionTarget, "e");
    },
    "79.Press key BACKSPACE": function() {
        act.press("backspace");
    },
    "80.Type in input": function() {
        var actionTarget = function() {
            return $(".container").find(" > div:nth(1) > input:nth(2)");
        };
        act.type(actionTarget, "testCardNumber");
    },
    "81.Press key TAB": function() {
        act.press("tab");
    },
    "82.Type in input": function() {
        var actionTarget = function() {
            return $(".container").find(" > div:nth(1) > input:nth(3)");
        };
        act.type(actionTarget, "testCartSecy");
    },
    "83.Press key BACKSPACE": function() {
        act.press("backspace");
    },
    "84.Type in input": function() {
        var actionTarget = function() {
            return $(".container").find(" > div:nth(1) > input:nth(3)");
        };
        act.type(actionTarget, "ui");
    },
    "85.Press key BACKSPACE": function() {
        act.press("backspace");
    },
    "86.Type in input": function() {
        var actionTarget = function() {
            return $(".container").find(" > div:nth(1) > input:nth(3)");
        };
        act.type(actionTarget, "ritu");
    },
    "87.Press key BACKSPACE": function() {
        act.press("backspace");
    },
    "88.Type in input": function() {
        var actionTarget = function() {
            return $(".container").find(" > div:nth(1) > input:nth(3)");
        };
        act.type(actionTarget, "yCode");
    },
    "89.Type in input": function() {
        var actionTarget = function() {
            return $(".container").find(" > div:nth(1) > input:nth(4)");
        };
        act.type(actionTarget, "testExpMonth");
    },
    "90.Press key TAB": function() {
        act.press("tab");
    },
    "91.Type in input": function() {
        var actionTarget = function() {
            return $(".container").find(" > div:nth(1) > input:nth(5)");
        };
        act.type(actionTarget, "testExpYear");
    },
    "92.Type in input": function() {
        var actionTarget = function() {
            return $(".container").find(" > div:nth(1) > input:nth(6)");
        };
        act.type(actionTarget, "tesExp");
    },
    "93.Press key BACKSPACE": function() {
        act.press("backspace");
    },
    "94.Press key BACKSPACE": function() {
        act.press("backspace");
    },
    "95.Type in input": function() {
        var actionTarget = function() {
            return $(".container").find(" > div:nth(1) > input:nth(6)");
        };
        act.type(actionTarget, "Bi");
    },
    "96.Press key combination BACKSPACE+SHIFT SHIFT+B": function() {
        act.press("backspace+shift shift+b");
    },
    "97.Type in input": function() {
        var actionTarget = function() {
            return $(".container").find(" > div:nth(1) > input:nth(6)");
        };
        act.type(actionTarget, "llond");
    },
    "98.Press key BACKSPACE BACKSPACE": function() {
        act.press("backspace backspace");
    },
    "99.Press key BACKSPACE": function() {
        act.press("backspace");
    },
    "100.Press key BACKSPACE": function() {
        act.press("backspace");
    },
    "101.Type in input": function() {
        var actionTarget = function() {
            return $(".container").find(" > div:nth(1) > input:nth(6)");
        };
        act.type(actionTarget, "ingAddress");
    },
    '102.Click submit button "Go Back"': function() {
        act.click(":containsExcludeChildren(Go Back)");
    },
    '103.Click submit button "Continue"': function() {
        act.click(":containsExcludeChildren(Continue)");
    },
    "104.Click input": function() {
        var actionTarget = function() {
            return $(".container").find(" > div:nth(1) > input:nth(0)");
        };
        act.click(actionTarget);
    },
    '105.Click submit button "Finish Order"': function() {
        act.click(":containsExcludeChildren(Finish Order)");
    },
    "106.Assert": function() {
        eq($(":containsExcludeChildren(alo)").text(), "alo");
        eq($(":containsExcludeChildren(2)").eq(1).text(), "2");
        eq($(":containsExcludeChildren(3)").text(), "3");
        eq($("#orders").find(":containsExcludeChildren(S)").eq(1).text(), "S");
        eq($("#orders").find(":containsExcludeChildren(6)").length > 0, true);
    },
    '107.Click submit button "Logout"': function() {
        act.click(":containsExcludeChildren(Logout)");
    }
};

