RULES

The code should be written in ES6 as much as possible

Use the create-react-app generator to start your project.
Follow the instructions on this repo to setup the generator: create-react-app

Your app should have one HTML page to render your react-redux application
There should be 2 container components
There should be 5 stateless components
There should be 3 routes
The Application must make use of react-router and proper RESTful routing (should you choose to use react-router v3 please refer to the appropriate docs; docs for v4 can be found here)
Use Redux middleware to respond to and modify state change
Make use of async actions to send data to and receive data from a server
Your Rails API should handle the data persistence. 
You should be using fetch() within your actions to GET and POST data from your API - do not use jQuery methods.
Your client-side application should handle the display of data with minimal data manipulation
Your application should have some minimal styling: feel free to stick to a framework (like react-bootstrap), but if you want to write (additional) CSS yourself, go for it!
Once your app is complete, fill out this checklist.
Go wild! These are only the basic requirements — you're free to add on as much stuff as you'd like.

xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx


2 container components

My ideas
1 a get component with state of my form
2 a post path with state of my form that i submit 

stateless components

add a about page
3 routes
get from the api
get by id
post 
update
delete

train board
1 component for a form which to search for search info in state
2 component for the returned info - populate the board

stateless presentation components
the board
different rows on the board

routes
get call to api

trains = Train.create([
    {destination: "Los Angeles", name: "Coast Starlight", number: 11, scheduled: 100, scheduled24: 1300, newtime: 200, newtime24:1400, service:  },
])
  

RAILS G

rails g model Train destination:string name:string number:integer scheduled:integer scheduled24:integer newtime:integer newtime24:integer service:string remarks:string --no-test-framework

BETTER ONE

rails g model Train destination:string newtime:string newtime24:string origin:string remarks_boarding:string scheduled:string scheduled24:string service:string trainno:string --no-test-framework

rails g controller trains --no-test-framework


QUESTIONS for Mo 

data comes from server as all strings. save in db as integers where possible? or datetime?
Model
need validation in Ruby Model?
NO
View
need views at all?
NO
Controller
just new and create routes?
TRUE
need routes.rb => probably
YES
how to add redux and router to index.js?

what do we need for backend? 
just new and create? 
dont have to make api call from there?
strong params?
NO


XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
TO ASK NIKY - ALREADY ANSWERED


Q: empty string is saved as nil in Rails. Then comes back as null. It does not render correctly
A: look up custom rails serializer methods

Q: how to make as one app
A: start from api again, follow article

Q: redirect after making a new train
A: this.props.history.push

Q: how to make my amtrak trains and amtrak station search use rails backend?
A: new routes and functions

Q: why wasnt props.hist.push working before on new train form :35
A: DOES not accept a callback function. example must be bad.

Q: why do i get Errno::ENETUNREACH (Failed to open TCP connection to :80 (Network is unreachable - connect(2) for nil port 80))
userTrainActions : 129
A: Wrong format. backticks

Q: how to parse the station result? scraper? append to DOM? jQuery?
how to async scrape that div || wait until the component starts, then do the slicing?
CDU=> nope, CDm=> nope, CWI=>?
A: CDM and CDU with a conditional and prevprops

Q: why isnt the delete and put fetches working and the axios ones do?
A: "no cors" is supposed to be in the headers

XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
TO ASK NIKY


Started GET "/api/v1/amtrak-station/NYP" for 127.0.0.1 at 2019-03-14 17:20:07 -0700
/home/learn/.rvm/gems/ruby-2.3.6/gems/activerecord-5.2.2/lib/active_record/log_subscriber.rb:98
Processing by Api::V1::TrainsController#amtrak_station as JSON
  Parameters: {"id"=>"NYP", "train"=>{}}

Started GET "/api/v1/amtrak-station-search/alb" for 127.0.0.1 at 2019-03-14 17:20:26 -0700
Processing by Api::V1::TrainsController#amtrak_station_search as JSON
  Parameters: {"id"=>"alb", "train"=>{}}
 
Started GET "/api/v1/trains" for 127.0.0.1 at 2019-03-14 17:20:44 -0700
Processing by Api::V1::TrainsController#index as JSON
  Parameters: {"train"=>{}}
  
Started POST "/api/v1/trains" for 127.0.0.1 at 2019-03-14 17:21:05 -0700
Processing by Api::V1::TrainsController#create as JSON
  Parameters: {"train"=>{"destination"=>"a", "newtime"=>"", "newtime24"=>"", "origin"=>"b", "remarks_boarding"=>"c", "scheduled"=>"1111", "scheduled24"=>"1111", "service"=>"d", "trainno"=>"e"}}
  
Started GET "/api/v1/trains/24" for 127.0.0.1 at 2019-03-14 17:21:43 -0700
Processing by Api::V1::TrainsController#show as JSON
  Parameters: {"id"=>"24", "train"=>{}}
  
Started PATCH "/api/v1/trains/24" for 127.0.0.1 at 2019-03-14 17:22:15 -0700
Processing by Api::V1::TrainsController#update as JSON
  Parameters: {"train"=>{"destination"=>"a", "newtime"=>"", "newtime24"=>"", "origin"=>"b", "remarks_boarding"=>"c", "scheduled"=>"1111", "scheduled24"=>"1111", "service"=>"d", "trainno"=>"a"},"id"=>"24"}
  
Started DELETE "/api/v1/trains/24" for 127.0.0.1 at 2019-03-14 17:23:25 -0700
Processing by Api::V1::TrainsController#destroy as JSON
  Parameters: {"id"=>"24"}
  
  
Some routes have train as {}, some dont, some are missing id{} etc. Am I doing these right?
	
									id					train
amtrak_station						"NYP"					{}
amtrak_station_search				alb						{}
get									N/A						{}
get by id							24						{}
post								N/A						{traininfo}
patch								24						{traininfo}
delete								24						N/A


my A: I think so

Q: Someone forked my video poker
my A: What to do?

Q: should def new and def edit have anything in them?
my A: I think not because I am not calling any forms to be returned. 

Q: difference between put and patch
my A: Put is new entry, patch is edit in html, but Rails does things differently. 

Q: Should i use put instead for updates?
my A: I tried switching Put to Patch, no difference.

Q: How to get by id the right record to update?
Am I doing it the right way? shouldn't the route be `${url}/${id} =>>>> /EDIT??
or does edit just serve the forms and update is the db call?
my A: I think I am right, but I am not sure.

Q: why am i even saving the result of CREATE_TRAIN to a state entry? I dont do anything with it. What should I do with it? userTrainReducer 14
my A: ?

Q: best way to show rails errors - not my way
my A: Lots of errors and redux issudes, Maybe use front side error package?

Q: Prevent render until all components are ready
 stop the amtrak select from rendering without trains on first try?

	Select a station, then search for a station,, click it. The board loads the old data and then the new.

	Other quick errors with time zone too.

	Sometimes I get "no trians" then trains appear


Q: Add a loading wheel or message

Q: Add "no stations found" for station search.

Q: how to do the following in the render stations?

if 12 there, 12 trains
if 0 => nothing. I want to say "no trains found"
if 6 there, 6 trains only, NO 6 gaps

if there are no results, render "No Trains Found"
if more than 0, map through. If not present, out put null
if i do a for loop, i cant do the const = x.map

i get 2 warnings  too
Warning: validateDOMNesting(...): <h4> cannot appear as a child of <tbody>.

Warning: Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state.

current logic
const result = mapped props
if "", return null
append to dom

Q: Fix errors. I get
 Warning: A component is changing a controlled input of type text to be uncontrolled. Input elements should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://fb.me/react-controlled-components
    in input (at Errors.js:101)
	
	and newTrainForm :35
	   this.props.createTrain(newTrain).then(res => {
      if (this.props.trainErrors !== []) {
        this.props.history.push("/view_user_trains");
        this.clearForm();
      }
	
	before, i got reducers should not call actions from 
	same code as above, but no if block.
	
Q: Warning: validateDOMNesting(...): Text nodes cannot appear as a child of <tbody>. in tbody (at AmtrakSelectBoard.js:63)

Q: should I use comp will rec props edit train form 35? or just not use the rails error results at all?
	
Q: Do I need a serializer?
my A: i dont think so? 

Q: fix line 67 in trains controller. render plain
my A: Unknown how to fix this without breaking everything
render html: render json: dont work. It works now, but i want to send that message

Q: user train actions error handling line 92 as suggested
my A: stops my error showing on the form

Q: Please explain this syntax.
my A: destructuring? 

const userSavedTrains = state.userSavedTrains.filter(
        train => train.id !== action.payload.data.id
      );
      return { ...state, userSavedTrains };

Q: Should UPDATE and DELETE reducers have same syntax?

 case "DELETE_TRAIN":
      const newUserSavedTrains = state.userSavedTrains.filter(
        train => train.id !== action.payload.id
      );
      return { ...state, userSavedTrains: newUserSavedTrains };
    case "UPDATE_TRAIN":
      const updatedTrain = {
        id: action.payload.id,
        destination: action.payload.destination,
        origin: action.payload.origin,
        remarks_boarding: action.payload.remarks_boarding,
        scheduled: action.payload.scheduled,
        scheduled24: action.payload.scheduled24,
        newtime: action.payload.newtime,
        newtime24: action.payload.newtime24,
        service: action.payload.service,
        trainno: action.payload.trainno
      };
      return {
        ...state,
        userSavedTrains: state.userSavedTrains.map(train =>
          train.id === action.payload.id ? (train = updatedTrain) : train
        )
      };
	  
	  
XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

IN PROGRESS

XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
NOT DONE YET

Add Solari board animations

Try for other countries


XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
BUGS

Can only polulate the edit form once
FIXED

XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
SUGGESTIONS



XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
DONE
Add time zone offsets

Q: Fix create payload in reducer? clean it up somehow?
A: Done. And every other fx there

Fix bug where user can change station, but not click select, and station name changes

Ticking clock component in board

Add station name in Amtrak board

Add station name in User board

Q: add like button like in live coding
A: Add a component to board, dont pass any props. all state is in the component


Add delete
DONE

Add update
DONE

Show validation errors
DONE 

Get data on DOM
DONE

Pass the station into the amtrak station search in the backened. Params doesn't work.
DONE

how to fix port 80 error
IT WAS THE BACKTICKS

line 36, what to return or render? how to get back to JS land?
DONE

hit the ruby api for post. never gets to rails. dies in train Action line 45
NIKY FIXED IT

get all from my api in rails, not from dixieland
DONE

add like button like in live coding
DONE

xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
