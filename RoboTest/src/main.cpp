#include <Arduino.h>
#include <ESP8266WiFi.h>
#include <WiFiClient.h>

// Wifi Access Point configuration
const char* ssid = "ESP8266"; // The name of the Wi-Fi network that will be created
const char* password = "kame";   // The password required to connect to it, leave blank for an open network
void parseData(String data);

WiFiServer server(80);
bool running=0;
String input;


void setup() {
    WiFi.mode(WIFI_STA);
    WiFi.disconnect();
    delay(100);

    WiFi.softAP(ssid, password);
    server.begin();
    Serial.begin(115200);
    Serial.print(WiFi.status());
    delay(1000);
}

void loop() {
    WiFiClient client = server.available();
    if (!client) {
        IPAddress myIP = WiFi.softAPIP();
        Serial.print("AP IP address: ");
        Serial.println(myIP);
        Serial.print(WiFi.status());
        delay(1000);
    }
    while (client.connected()) {
        if (running){
            Serial.println("running");
            if (client.available()) {
                while(client.available()) input = client.readStringUntil('+');
                Serial.println(input);
                parseData(input);
            }
            else {
                Serial.println("Keep Moving");
                Serial.println(input);
                parseData(input);
            }
        }
        else{
            if (client.available()) {
                while(client.available()) input = client.readStringUntil('+');
                Serial.println(input);
                parseData(input);
            }
            else {
              // Serial.println("Robot home");
            }
        }
    }
}

void parseData(String data){

    switch (data.toInt()){

        case 1: // Up
            Serial.println("Robot walk");
            running = 1;
            break;

        case 2: // Down
            Serial.println("Robot down(nothing-reset)");
            break;

        case 3: // Left
            Serial.println("Robot turnL");
            running = 1;
            break;

        case 4: // Right
            Serial.println("Robot turnR");
            running = 1;
            break;

        case 5: // STOP
            running = 0;
            Serial.println("Robot Stop");
            break;

        case 6: // heart
            Serial.println("Robot pushUp");
            break;

        case 7: // fire
            Serial.println("Robot upDown");
            break;

        case 8: // skull
            Serial.println("Robot jump");
            break;

        case 9: // cross
            Serial.println("Robot hello");
            break;

        case 10: // punch
            Serial.println("Robot frontBack");
            break;

        case 11: // mask
            Serial.println("Robot dance");
            break;

        default:
            Serial.println("Robot home(default)");
            break;
    }
}
