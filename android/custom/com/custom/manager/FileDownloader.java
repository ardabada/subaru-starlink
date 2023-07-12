package com.custom.manager;

import android.app.DownloadManager;
import android.content.Context;
import android.net.Uri;
import android.os.Environment;

import android.content.Context;
import android.os.AsyncTask;
import android.os.Environment;

import java.io.File;
import java.io.FileWriter;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.zip.ZipEntry;
import java.util.zip.ZipInputStream;
import net.osmand.util.Algorithms;

public class FileDownloader {
    private DownloadManager downloadManager;
    private Context context;

    public FileDownloader(Context context) {
        this.context = context;
        downloadManager = (DownloadManager) context.getSystemService(Context.DOWNLOAD_SERVICE);
    }

    public String download(String fileUrl) throws IOException {
        
        File destination = new File(context.getFilesDir(), "test.txt");
        FileWriter myWriter = new FileWriter(destination);
        myWriter.write("hello!");
        myWriter.close();
        return destination.getAbsolutePath();
    }

    private void unzip(String zipFilePath, String outputDir) {
        try {
            InputStream inputStream = context.getAssets().open(zipFilePath);
            ZipInputStream zipInputStream = new ZipInputStream(inputStream);
            byte[] buffer = new byte[1024];

            ZipEntry zipEntry = zipInputStream.getNextEntry();
            while (zipEntry != null) {
                File outputFile = new File(outputDir, zipEntry.getName());

                if (zipEntry.isDirectory()) {
                    outputFile.mkdirs();
                } else {
                    FileOutputStream outputStream = new FileOutputStream(outputFile);
                    int length;
                    while ((length = zipInputStream.read(buffer)) > 0) {
                        outputStream.write(buffer, 0, length);
                    }
                    outputStream.close();
                }
                zipEntry = zipInputStream.getNextEntry();
            }
            zipInputStream.closeEntry();
            zipInputStream.close();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    // public long downloadFile(String fileUrl, String fileName) {
    //     DownloadManager.Request request = new DownloadManager.Request(Uri.parse(fileUrl));
    //     request.setTitle(fileName);
    //     request.setDescription("Downloading");
    //     request.setNotificationVisibility(DownloadManager.Request.VISIBILITY_VISIBLE_NOTIFY_COMPLETED);
    //     request.setDestinationInExternalPublicDir(Environment.DIRECTORY_DOWNLOADS, fileName);
        
    //     long downloadId = downloadManager.enqueue(request);
    //     return downloadId;
    // }

    // public int queryDownloadProgress(long downloadId) {
    //     DownloadManager.Query query = new DownloadManager.Query();
    //     query.setFilterById(downloadId);

    //     Cursor cursor = downloadManager.query(query);
    //     if (cursor != null && cursor.moveToFirst()) {
    //         int columnIndex = cursor.getColumnIndex(DownloadManager.COLUMN_BYTES_DOWNLOADED_SO_FAR);
    //         int bytesDownloadedSoFar = cursor.getInt(columnIndex);

    //         columnIndex = cursor.getColumnIndex(DownloadManager.COLUMN_TOTAL_SIZE_BYTES);
    //         int totalSizeBytes = cursor.getInt(columnIndex);

    //         int progress = (int) ((bytesDownloadedSoFar * 100L) / totalSizeBytes);

    //         cursor.close();

    //         return progress;
    //     }

    //     return -1;
    // }
}