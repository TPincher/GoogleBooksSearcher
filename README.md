This is a test project for my first time working with React, as well as getting more experience working with API calls and manipulating responses.

It's a fairly simple search feature, which pulls and paginates data from the Google Books API, and allows a user to specify a type of data to search for.


Remaining issues:

The data does not return an accurate 'total results' number, so the pagination does not know the limit of returns until it hits it. This leads to a rare issue where if the last page returns exactly 40 results, the 'next page' button will not disable. Possible solve could be checking if the returned values change between pressing the button, and disabling it if they do not.

Disable scrolling on main page while scrolling is open.

Change format on smaller screens. The large "book" cards work on desktop, but will be frustrating on a smaller screen. Other options are to limit returns to 5 or 10 at a time for mobile-sized devices.

Implement a 'return to top' button. An alternative would be to lock the header (search function and page scroller) in place, so they are always accessible.

Use context to implement dark and light mode.