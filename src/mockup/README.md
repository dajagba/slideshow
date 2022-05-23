SYSTEM DESIGN

## General Requirement
- MVP
  - User should be able to view all images in the slideshow
  - User should be able to next or previous image in the slideshw 
  - User should be able to add images via a url 
  - User should be able to delete an image 

- Future State
  - User should be able to search for images 
  - User should able to multi-upload and multi delete
  - User should  be able to upload via a file 

## Functional Requirements

-  Network Effiency (Uploading 100+ Photos or opening laarge images)
-  Should support both mobile/web 
-  Screen sizing for large/small screens 
-  Configurable slideshow attriibutes 
-  Latency for uploading and slideshow retrieval
-  Error Handling (ngrx)
-  DB storage.. SQL & CDN for images 

## Component Architecture
 
- ...To add diagram 

## Data Entities

- Store
  - AppState  
    - SlideShow: SlideShowState 
  - SlideShowState
    - pictures: IPicture[]
    - lastUpdatedTime: Date 
    - selectedImage: IPicture 
    - lastUploadedImage: IPicture 
- IPicture (SlideShow Image)
  - index 
  - id (unqiue string used for storing)
  - caption 
  - title 
  - url

## Data APIs

- Actions
  - GET_INITIAL_SLIDESHOW_DATA = '[SlideShow] Fetch Initial Data',
  - GET_INITIAL_SLIDESHOW_DATA_SUCCESS = '[SlideShow] Fetch Initial Data Success',
  - ADD_SLIDESHOW_IMAGE = '[SlideShow] Add SlideShow Image',
  - ADD_SLIDESHOW_IMAGE_SUCCESS = '[SlideShow] Add SlideShow Image Success',
  - DELETE_SLIDESHOW_IMAGE = '[SlideShow] Delete SlideShow Image ',
  - DELETE_SLIDESHOW_IMAGE_SUCCESS = '[SlideShow] Delete Slideshow Image Sucess',
  - UPDATE_SELECTED_SLIDESHOW_IMAGE = '[SlideShow] Update Selected SlideShow Image',

- Effects 
  - SlideShow Effects
    - GetInitialSlideShowData
      - Triggers: GET_INITIAL_SLIDESHOW_DATA_SUCCESS, UPDATE_SELECTED_SLIDESHOW_IMAGE
    - DeleteSlideShowImage
      - Triggers: DELETE_SLIDESHOW_IMAGE_SUCCESS, UPDATE_SELECTED_SLIDESHOW_IMAGE (conditionally)
    - AddSlideShowImage
      - Triggers: ADD_SLIDESHOW_IMAGE_SUCCESS

- Reducers 
  - SlideShow Reducers
    - GetInitialSlideShowDataSuccess 
       - Update Pictures and LastUploadedImage State 
    - AddSlideShowImageSuccess
       - Updates Pictures and LastUploadedImage State 
    - DeleteSlideShowImageSuccess
       - Updates Pictures state
    - UpdateSelectedSlideShowImage
       - Updates SelectedImage State

- Selectors 
  - SlideShow Selectors
    - selectSlideShowPictures
      - Selects the Slideshow all pictures for the store
    - selectCurrentlySelectedPicture
      - select only what is being shown currently on the slideshow
    - selectLastUploadedPicture
      - select only the lastUpdatedImage

## Performance Improvements/Optimization

- Network 
  - CDN for the images 
  - Image Optimizer (convert to webp)
  - Caching (being done with Redux)
  - debouncing search (when it gets implemented)
- Javascript 
  - Web workers for the heavy tasks (multi-uplaod/multi-delete)
  - Code minimizing 
- Renderiing 
  - Placeholder images while UI fetches for data 

## Accessabilities

- Aria labels
- TBD... 

## How To Make This 1% Better  

- Moving the upload logic to service end
- Search Bar to find specific images 
- Multi-Upload / Multi Deletion 
- Admin Portal (configuring the Slideshow Properties)
- Revamp UI appearnace

## Ideas on how to incorporate it to current app 

  - "What Am I Craving" 
    - Similar to "Saved Resturants" but will be "Saved Meals" 
  - About
    - Saved Resturants can be a little too unspecific... For example, Sushi is plentiful in New York and most are named the exact same, but may taste different. A "Dragon Roll" could be better at resturant A vs resturant B, but you'd still buy from either. What would be graet is to have a slideshow area on all the foods that a user likes and had ordered, users have the ability to add personal notes on what they liked and disliked about it, which may trigger more rebuys as they are recalling about the food by looking at the picture and ALSO looking at the caption on what the personal notes they left about the meal. 

  - Techinical Notes
    - May have to source some user data on frequently ordered resturants to give suggestions to add to their "What am I craving list". Sending out push notifications to user's devices after x period of time to input feedback.. 
    - could also prompt user to give a review using same personal note, which could go directly to the resturant so they could also improve on it 
    - With what they disliked comments, if they reorder, it can be auto populated to say "too much salt", so the resturant could ensure the user doens't get a dish that has too mcuh salt 
