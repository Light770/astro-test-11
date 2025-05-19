
            export const queries = {
              // Add queries for each schema type
            
              getSitesettingss: `*[_type == "siteSettings"]`,
              getSitesettingsById: (id) => `*[_type == "siteSettings" && _id == "${id}"][0]`,
                
              getNavigationlinks: `*[_type == "navigationLink"]`,
              getNavigationlinkById: (id) => `*[_type == "navigationLink" && _id == "${id}"][0]`,
                
              getPages: `*[_type == "page"]`,
              getPageById: (id) => `*[_type == "page" && _id == "${id}"][0]`,
                
              getBlogposts: `*[_type == "blogPost"]`,
              getBlogpostById: (id) => `*[_type == "blogPost" && _id == "${id}"][0]`,
                
              getAuthors: `*[_type == "author"]`,
              getAuthorById: (id) => `*[_type == "author" && _id == "${id}"][0]`,
                
              getCategorys: `*[_type == "category"]`,
              getCategoryById: (id) => `*[_type == "category" && _id == "${id}"][0]`,
                
              getSeos: `*[_type == "seo"]`,
              getSeoById: (id) => `*[_type == "seo" && _id == "${id}"][0]`,
                
              getTextimages: `*[_type == "textImage"]`,
              getTextimageById: (id) => `*[_type == "textImage" && _id == "${id}"][0]`,
                
              getBasicforms: `*[_type == "basicForm"]`,
              getBasicformById: (id) => `*[_type == "basicForm" && _id == "${id}"][0]`,
                
              getFormfields: `*[_type == "formField"]`,
              getFormfieldById: (id) => `*[_type == "formField" && _id == "${id}"][0]`,
                
              getContactcardss: `*[_type == "contactCards"]`,
              getContactcardsById: (id) => `*[_type == "contactCards" && _id == "${id}"][0]`,
                
              getBasicdarkctas: `*[_type == "basicDarkCTA"]`,
              getBasicdarkctaById: (id) => `*[_type == "basicDarkCTA" && _id == "${id}"][0]`,
                
              getBasiclightctas: `*[_type == "basicLightCTA"]`,
              getBasiclightctaById: (id) => `*[_type == "basicLightCTA" && _id == "${id}"][0]`,
                
              getBasicfaqs: `*[_type == "basicFAQ"]`,
              getBasicfaqById: (id) => `*[_type == "basicFAQ" && _id == "${id}"][0]`,
                
              getFeaturecardss: `*[_type == "featureCards"]`,
              getFeaturecardsById: (id) => `*[_type == "featureCards" && _id == "${id}"][0]`,
                
              getFeaturelists: `*[_type == "featureList"]`,
              getFeaturelistById: (id) => `*[_type == "featureList" && _id == "${id}"][0]`,
                
              getBasicfeeds: `*[_type == "basicFeed"]`,
              getBasicfeedById: (id) => `*[_type == "basicFeed" && _id == "${id}"][0]`,
                
              getHighlightrowss: `*[_type == "highlightRows"]`,
              getHighlightrowsById: (id) => `*[_type == "highlightRows" && _id == "${id}"][0]`,
                
              getSignups: `*[_type == "signUp"]`,
              getSignupById: (id) => `*[_type == "signUp" && _id == "${id}"][0]`,
                
              getPricingcolumnss: `*[_type == "pricingColumns"]`,
              getPricingcolumnsById: (id) => `*[_type == "pricingColumns" && _id == "${id}"][0]`,
                
              getBasicsocialproofs: `*[_type == "basicSocialProof"]`,
              getBasicsocialproofById: (id) => `*[_type == "basicSocialProof" && _id == "${id}"][0]`,
                
              getBasicdarktestimonialss: `*[_type == "basicDarkTestimonials"]`,
              getBasicdarktestimonialsById: (id) => `*[_type == "basicDarkTestimonials" && _id == "${id}"][0]`,
                
              getPricingtables: `*[_type == "pricingTable"]`,
              getPricingtableById: (id) => `*[_type == "pricingTable" && _id == "${id}"][0]`,
                
              getPricingtableheaders: `*[_type == "pricingTableHeader"]`,
              getPricingtableheaderById: (id) => `*[_type == "pricingTableHeader" && _id == "${id}"][0]`,
                
              getPricingtablebodys: `*[_type == "pricingTableBody"]`,
              getPricingtablebodyById: (id) => `*[_type == "pricingTableBody" && _id == "${id}"][0]`,
                
              getPricingtablefooters: `*[_type == "pricingTableFooter"]`,
              getPricingtablefooterById: (id) => `*[_type == "pricingTableFooter" && _id == "${id}"][0]`,
                }
