// Note: If we have a function, we want to return similar values for all possible return cases.
const validateBlogs = (sample_blogs) => {

	/* // EXAMPLE of .filter()
	const array = ["string", 2, true, "other string"]
	const filteredArray = array.filter((arrayItem)=>{
		// .filter() will loop through an array we provide and will only return items that match true for the condition that we define
		// For .filter() the return value must be a boolean and should be true for items that we want to keep
		if (typeof(arrayItem) === 'string') {
			return true;
		} else {
			return false;
		}
	})
	console.log("array ", array)
	console.log("filteredArray ", filteredArray) */

	if (sample_blogs.title === undefined || typeof(sample_blogs.title) !== "string" || sample_blogs.title.length > 40) {
		
		return {
			isValid: false,
			message: "title is required and must be of type string less than 40 characters"
		}
	}

	if (sample_blogs.text === undefined || typeof(sample_blogs.text) !== "string") {
		
		return {
			isValid: false,
			message: "blog is required and must be of type string"
		}
	}

	if (sample_blogs.author === undefined || typeof(sample_blogs.author) !== "string" || sample_blogs.author.length > 40 ) {
		
		return {
			isValid: false,
			message: "Author is required and it must be a string and less than 40 characters"
		}
	}

	if (sample_blogs.category === undefined || !Array.isArray(sample_blogs.category) || sample_blogs.category.length === 0) {
		
		return {
			isValid: false,
			message: "category is required and must have length"
		}
	}

    

    
       let newArrayCategories = ["Lorem", "ipsum", "dolor", "sit", "amet"]
       let isValid = true

        
          sample_blogs.category.forEach(category => {
            
            console.log(category)
            if(!newArrayCategories.includes(category)){
              
                isValid = false
                
                
            }
            
          });

          if (isValid === false){
            
            return {
            isValid: false,
            message: "category must be of type string and must include categories Lorem, ipsum, dolor, sit, amet"
            }
          }
             
            
    
    
    

    if (sample_blogs.category.length > 10) {
		// age is NOT required, so first we check to see if it even exists before checking to see if the type is anything except 'number'
		return {
			isValid: false,
			message: "You can only have less than 10 categories per submission and catagories must be of type Lorem, ipsum, dolor, sit or amet "
		}
	}



	// We are going to use .filter() to iterate through favoriteFoods and will only bring through values that are NOT strings. Then we will check if the resultant array has any length, in which case we know there are non-string values in the array.
	const newBlogData = sample_blogs.category.filter((blogs)=>{

		// If the callback function in .filter() returns true, then the item will be kept in the resultant array. If the callback returns false, the item will be filtered out
		if (typeof(blogs) !== 'string') {
			return true
		} else {
			return false
		}
	})

	console.log("blogs", newBlogData)

	if (newBlogData.length > 0) {
		return {
			isValid: false,
			message: "category must be an array of strings"
		}
	}

	return {
		isValid: true
	}
}





module.exports = {
	// These two lines are equivalent because the variable name and the key for the object are the same name. Typically, we write the short-hand version.
	// validateUserData: validateUserData
	validateBlogs, 
}