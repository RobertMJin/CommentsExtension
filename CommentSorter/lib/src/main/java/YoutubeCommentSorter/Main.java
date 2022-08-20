package YoutubeCommentSorter;

/**
 * [Main.java]
 * @author Aidan Elliott-Korytek
 * Uses gradle and youtube api to fetch and sort all comments on a youtube video by number of replies
 * Made for Hack the 6ix 2022
 */

import com.google.api.client.googleapis.javanet.GoogleNetHttpTransport;
import com.google.api.client.googleapis.json.GoogleJsonResponseException;
import com.google.api.client.http.javanet.NetHttpTransport;
import com.google.api.client.json.JsonFactory;
import com.google.api.client.json.gson.GsonFactory;

import com.google.api.services.youtube.YouTube;
import com.google.api.services.youtube.model.CommentSnippet;
import com.google.api.services.youtube.model.CommentThread;
import com.google.api.services.youtube.model.CommentThreadListResponse;
import java.io.IOException;
import java.io.File;
import java.io.FileReader;
import java.io.BufferedReader;
import java.security.GeneralSecurityException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class Main {
    
    // sets app name for youtube api purposes and defines the jsonfactory using Gson
    private static final String APPLICATION_NAME = "Youtube Comment Sorter";
    private static final JsonFactory JSON_FACTORY = GsonFactory.getDefaultInstance();

    // builds and returns an authorizes api service. Directly taken from youtube api sample (not my code)
    public static YouTube getService() throws GeneralSecurityException, IOException {
        final NetHttpTransport httpTransport = GoogleNetHttpTransport.newTrustedTransport();
        return new YouTube.Builder(httpTransport, JSON_FACTORY, null)
            .setApplicationName(APPLICATION_NAME)
            .build();
    }

    public static void main(String[] args) throws GeneralSecurityException, IOException, GoogleJsonResponseException {
    	
    	// uses a bufferedreader to locate the apikey file 
		String API_KEY = null;
    	try {
    		File apikey = new File("apikey.txt");
    		BufferedReader br = new BufferedReader(new FileReader(apikey));
    		API_KEY = br.readLine();
    	} catch (Exception e) { 
    		System.out.println("Error loading apikey.txt. Please make sure it is in the 'lib' folder.\n " + e);
    		System.exit(0);
    	}
    	
    	// Initalizes the comment list
    	List<CommentThread> totalComments = new ArrayList<CommentThread>();
    	
    	// initializes a variable to store nextPageToken to pagiate through the comments
    	String nextToken = null;
    	
    	// initializes youtubeService
        YouTube youtubeService = getService();
        
        // pagiates through the comment section until all available comments have been grabbed through the api
        do {
	        // Define and execute the API request
	        YouTube.CommentThreads.List request = youtubeService.commentThreads()
	            .list(Arrays.asList("snippet"));
	        CommentThreadListResponse response = request.setKey(API_KEY)
	            .setModerationStatus("published")
	            .setOrder("time")
	            .setTextFormat("html")
	            .setMaxResults(100L)
	            .setVideoId("PRP8qAfwJuA")
	            .setPageToken(nextToken)
	            .execute();
	        //System.out.println(response);
	        
	        // stores the next page token to continue digging throught the comments
	        nextToken = response.getNextPageToken();
	        System.out.println(nextToken);
	        
	        // adds the newly gotten comments to the total comments arraylist
	        
	        totalComments.addAll(response.getItems());
	        
	        System.out.println(totalComments.size());
	        //System.out.println(response.getItems().size());
	        
        } while (nextToken != null);
        
        // checks if there are video comments
        if (totalComments.isEmpty()) {
            System.out.println("Can't get video comments.");
        } else {
            // Sorts all comments using compareTo
        	totalComments.sort((o1, o2) -> o1.getSnippet().getTotalReplyCount().compareTo(o2.getSnippet().getTotalReplyCount()));
            
        	// outputs all sorted comments
        	for (CommentThread videoComment : totalComments) {
            	CommentSnippet snippet = videoComment.getSnippet().getTopLevelComment().getSnippet();
                System.out.println("Author: " + snippet.getAuthorDisplayName()); 
                System.out.println("Comment: " + snippet.getTextOriginal()); 
                System.out.println("Reply Count: " + videoComment.getSnippet().getTotalReplyCount());
                System.out.println("\n-----------------------------------------------------------------\n");
            }
            System.out.println(totalComments.size());
            
        }
        
        //CommentThread[] userArray = new Gson().fromJson("" + response, CommentThread[].class);
        //CommentThread test = new Gson().fromJson("" + response, CommentThread.class);
        
        //System.out.println(test);
    }
    
}
