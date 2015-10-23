/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        document.addEventListener("pause", app.pauseEvent, false);
        document.addEventListener("resume", app.resumeEvent, false);
        document.addEventListener("online", app.onlineEvent, false);
        document.addEventListener("offline", app.offlineEvent, false);
        document.addEventListener("backbutton", app.backButtonEvent, false);
        document.addEventListener("menubutton", app.menuButtonEvent, false);
        document.addEventListener("searchbutton", app.searchButtonEvent, false);
        document.addEventListener("startcallbutton", app.startcallButtonEvent, false);
        document.addEventListener("endcallbutton", app.endcallButtonEvent, false);
        document.addEventListener("volumedownbutton", app.volumeDownButtonEvent, false);
        document.addEventListener("volumeupbutton", app.volumeUpButtonEvent, false);
        document.addEventListener("batterystatus", app.batteryStatusEvent, false);
        app.backgroundModePlugin();
        app.receivedEvent('deviceready');
    },
    
    pauseEvent: function(){
        alert('pause, app go to background now.');
    },
    
    resumeEvent: function(){
        alert('resume, app go to front now.');
    },

    onlineEvent: function(){
        alert('online');
    },
    
    offlineEvent: function(){
        alert('offline');
    },

    backButtonEvent: function(){
        alert('back button clicked.');
    },

    menuButtonEvent: function(){
        alert('menu button clicked.');
    },

    searchButtonEvent: function(){
        alert('search button clicked.');
    },

    startcallButtonEvent: function(){
        alert('startcall button clicked.');
    },

    endcallButtonEvent: function(){
        alert('endcall button clicked.');
    },

    volumeDownButtonEvent: function(){
        alert('volume down button clicked.');
    },

    volumeUpButtonEvent: function(){
        alert('volume up button clicked.');
    },

    batteryStatusEvent:function(){
        alert('buttery status changed by 1%.');
    },

    backgroundModePlugin: function(){
        // Android customization
        cordova.plugins.backgroundMode.setDefaults({ text:'Doing heavy tasks.'});
        // Enable background mode
        cordova.plugins.backgroundMode.enable();

        // Called when background mode has been activated
        cordova.plugins.backgroundMode.onactivate = function () {
            setTimeout(function () {
                // Modify the currently displayed notification
                cordova.plugins.backgroundMode.configure({
                    text:'Running in background for more than 5s now.'
                });
            }, 5000);
        }
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

app.initialize();