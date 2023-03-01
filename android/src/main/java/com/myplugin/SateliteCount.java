package com.myplugin;

import android.annotation.SuppressLint;
import android.content.Context;
import android.location.GpsSatellite;
import android.location.GpsStatus;
import android.location.LocationManager;
import android.util.Log;

import androidx.appcompat.app.AppCompatActivity;

public class SateliteCount {
    public static int Satellites=0;
    public String echo(String value) {
        Log.i("Echo", value);
        return value;
    }

    @SuppressLint("MissingPermission")
    public static int StartTracking(AppCompatActivity activity) {
        final LocationManager locationManager  = (LocationManager) activity.getSystemService(Context.LOCATION_SERVICE);

        GpsStatus.Listener gpsStatusListener = event -> {
            Log.i("","In onGpsStatusChanged event: "+event);
            if(event == GpsStatus.GPS_EVENT_SATELLITE_STATUS || event == GpsStatus.GPS_EVENT_FIRST_FIX){
                @SuppressLint("MissingPermission") GpsStatus status = locationManager.getGpsStatus(null);
                Iterable<GpsSatellite> sats = status.getSatellites();
                Satellites=0;
                for (GpsSatellite sat:sats){
                    if(sat.usedInFix()){
                        Satellites++;
                    }
                    Log.i("","Setting Satellites from GpsStatusListener: "+Satellites);
                }
            }
        };
        locationManager.addGpsStatusListener(gpsStatusListener);
        return Satellites;
    }

}
