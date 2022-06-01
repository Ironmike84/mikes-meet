User Stories
-------------------------------------------------------


FEATURE 2: SHOW/HIDE AN EVENT'S DETAILS
-------------------------------------------------------------------------
Scenario 1: An event element is collapsed by default
- Given: On page entry.
- When:  The User has not made a search Query.
- Then: The Event Details Are Collapsed.

Scenario 2: User can expand an event to see its details
- Given: User Wants more details about the event.
- When: User clicks a specific Event.
- Then: Expand event to show Contents of Search Query.

Scenario 3: User can collapse an event to hide its details
- Given: The User has Sent a search Query.
- When: The user had DoubleClicked on a Specific Event.
- Then: The event Will Collapse the details of that specific event.


FEATURE 3: SPECIFY NUMBER OF EVENTS
-------------------------------------------------------------------------
Scenario 1: When user hasn’t specified a number, 32 is the default number
- Given: A user has not specified the number of Events.
- When: The user starts their search.
- Then: 32 events are listed.

Scenario 2: User can change the number of events they want to see
- Given: The user can specifies the number of events 
- When: The user specifies the number and date of events 
- Then: The number of events for the specific date is displayed.


FEATURE 4: USE THE APP WHEN OFFLINE
-------------------------------------------------------------------------
Scenario 1: Show cached data when there’s no internet connection
- Given: The Users goes offline or losses Connection 
- When: The user attempts to view the data searched for.
- Then: The data will be cached and is available to see.

Scenario 2: Show error when user changes the settings (city, time range)
- Given:  The User Attempts to Change city selection.
- When:  The User enters a new Search query.
- Then: An Error Message Is Displayed.


FEATURE 5: DATA VISUALIZATION
-------------------------------------------------------------------------
Scenario 1: Show a chart with the number of upcoming events in each city
- Given: A User has searched for a specific city and date range.
- When: A User openes the collapsed detailed information
- Then:  Graph's are displayed with data.
