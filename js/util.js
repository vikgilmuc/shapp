            ko.virtualElements.allowedBindings.jqmforeach = true;
            ko.bindingHandlers.jqmforeach = {
                init: function (element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) {
                    $.mobile.activePage.trigger('createpage');
                    console.log("initialized");
                  return ko.bindingHandlers['foreach']['init'](element, valueAccessor, allBindingsAccessor, viewModel, bindingContext);
                },
                update: function (element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) {
                    var output = ko.bindingHandlers['foreach']['update'](element, valueAccessor, allBindingsAccessor, viewModel, bindingContext);
                    console.log("updated");
                    if ($.mobile.activePage) {
                        $.mobile.activePage.trigger('createpage');
                    }
                    var listview = null;
                    if (element.nodeType == 8) {
                        if (element.parentNode.tagName.toLowerCase() == 'ul' && element.parentNode.getAttribute('data-role') == 'listview')
                        listview = element.parentNode;
                         } else if (element.hasAttribute('data-role') && element.getAttribute('data-role') == 'listview')
                           listview = element;
                           
                    
                    console.log(listview);
                    
                    if (listview) {
                        try {
                        $(listview).listview('refresh');
                        } catch (e) {
                        try { $(listview).listview(); } catch (e) { };
                        }
                    }
                    var properties = allBindingsAccessor().jmforeach;
                    if (properties) {
                        console.log("properties");
                        if (properties['onRendered']) {
                            var value = valueAccessor();
                            properties['onRendered'](element, value.data ? value.data : value);
                        }
                    }
                    return output;
                }
            };  