# CommentsExtension
###### A chrome extension that lets you sort Youtube comments by additional attributes such as replies or likes.
The actual extension has gone unfinished for Hack the 6ix unfortunately, however the source code for the comment sorter is still runnable with Gradle. Below are instructions to do so.

## Requirements:
- Install the latest version of JDK here: [https://www.oracle.com/java/technologies/downloads/](https://www.oracle.com/java/technologies/downloads/)
- Acquire a [Google API Key](https://cloud.google.com/docs/authentication/api-keys) through [Google Cloud](https://console.cloud.google.com/), and enable [YouTube Data API v3](https://developers.google.com/youtube/v3/getting-started#:~:text=the%20API%20supports.-,Before%20you%20start,of%20arbitrary%20data%20structures.%20For%20more%20information%2C%20see%20json.org.,-Resources%20and%20resource).

## Gradle Setup:
#### Windows

1. Navigate to /CommentSorter/
2. Create a file named `apikey.txt` with a [Google API Key](https://cloud.google.com/docs/authentication/api-keys) in its contents and save it here.
3. Open cmd and navigate to /CommentsExtension/
4. In cmd, run `gradlew run --args="VIDEO_ID SORT_TYPE"` where `VIDEO_ID` is the id (found in the youtube url) of the video you want to get comments from and `SORT_TYPE` is set to either `replies` or `likes` depending on what you want to sort by.
5. Check the folder for `output.txt` as this will contain all the sorted comment data!