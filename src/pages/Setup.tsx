
import Navbar from "@/components/Navbar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Setup = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 container py-8">
        <h1 className="text-3xl font-bold mb-2">Arduino Setup Guide</h1>
        <p className="text-muted-foreground mb-6">
          Follow these steps to connect your Arduino to the PlantMate dashboard
        </p>
        
        <Tabs defaultValue="hardware">
          <TabsList className="mb-6">
            <TabsTrigger value="hardware">Hardware Setup</TabsTrigger>
            <TabsTrigger value="software">Software Setup</TabsTrigger>
            <TabsTrigger value="database">Database Connection</TabsTrigger>
            <TabsTrigger value="troubleshooting">Troubleshooting</TabsTrigger>
          </TabsList>
          
          <TabsContent value="hardware">
            <Card>
              <CardHeader>
                <CardTitle>Hardware Components Required</CardTitle>
                <CardDescription>Gather these components before starting</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <h3 className="text-lg font-medium">Required Components:</h3>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Arduino board (Uno, Nano, or ESP32/ESP8266 recommended)</li>
                    <li>Soil moisture sensor (capacitive type recommended for longevity)</li>
                    <li>WiFi module (ESP8266 or built-in WiFi if using ESP32)</li>
                    <li>Jumper wires</li>
                    <li>USB cable for programming</li>
                    <li>Power supply (5V for Arduino, 3.3V for ESP boards)</li>
                  </ul>
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-lg font-medium">Connection Diagram:</h3>
                  <p>Connect the components as follows:</p>
                  <ol className="list-decimal pl-6 space-y-2">
                    <li>
                      <strong>Soil Moisture Sensor:</strong>
                      <ul className="list-disc pl-6">
                        <li>VCC to Arduino 5V (or 3.3V for ESP boards)</li>
                        <li>GND to Arduino GND</li>
                        <li>OUT/AOUT to Arduino Analog Pin (A0)</li>
                      </ul>
                    </li>
                    <li>
                      <strong>ESP8266 WiFi Module (if using separate module):</strong>
                      <ul className="list-disc pl-6">
                        <li>VCC to Arduino 3.3V</li>
                        <li>GND to Arduino GND</li>
                        <li>TX to Arduino RX (Digital Pin 2)</li>
                        <li>RX to Arduino TX (Digital Pin 3)</li>
                      </ul>
                    </li>
                  </ol>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="software">
            <Card>
              <CardHeader>
                <CardTitle>Software Setup</CardTitle>
                <CardDescription>Install required libraries and upload the code to your Arduino</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <h3 className="text-lg font-medium">Required Libraries:</h3>
                  <p>Install these libraries via Arduino IDE Library Manager</p>
                  <ul className="list-disc pl-6">
                    <li>ESP8266WiFi or WiFi (for ESP32)</li>
                    <li>ArduinoJson</li>
                    <li>HTTPClient</li>
                  </ul>
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-lg font-medium">Example Arduino Code:</h3>
                  <div className="bg-black text-white p-4 rounded-md overflow-x-auto text-sm">
                    <pre>{`
#include <ESP8266WiFi.h> // Use <WiFi.h> for ESP32
#include <ArduinoJson.h>
#include <HTTPClient.h>

// WiFi credentials
const char* ssid = "YOUR_WIFI_SSID";
const char* password = "YOUR_WIFI_PASSWORD";

// API endpoint - replace with your database API
const char* serverUrl = "https://your-api-endpoint.com/readings";

// Soil moisture sensor pin
const int soilMoisturePin = A0;

// Plant ID - unique identifier for this plant/sensor
const String plantId = "plant-001";

// Time between readings (milliseconds)
const unsigned long readingInterval = 60000; // 1 minute

void setup() {
  Serial.begin(115200);
  
  // Connect to WiFi
  WiFi.begin(ssid, password);
  Serial.print("Connecting to WiFi");
  
  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }
  
  Serial.println();
  Serial.println("WiFi connected");
  Serial.print("IP address: ");
  Serial.println(WiFi.localIP());
}

void loop() {
  // Read soil moisture
  int rawValue = analogRead(soilMoisturePin);
  
  // Convert to percentage (adjust min/max values based on your sensor)
  int soilMoisturePercent = map(rawValue, 1023, 0, 0, 100);
  
  // Constrain to 0-100 range
  soilMoisturePercent = constrain(soilMoisturePercent, 0, 100);
  
  Serial.print("Soil Moisture: ");
  Serial.print(soilMoisturePercent);
  Serial.println("%");
  
  // Send data if WiFi is connected
  if (WiFi.status() == WL_CONNECTED) {
    sendSensorData(soilMoisturePercent);
  } else {
    Serial.println("WiFi disconnected. Reconnecting...");
    WiFi.reconnect();
  }
  
  // Wait for next reading
  delay(readingInterval);
}

void sendSensorData(int moistureValue) {
  HTTPClient http;
  
  // Configure target server and URL
  http.begin(serverUrl);
  
  // Set content type
  http.addHeader("Content-Type", "application/json");
  
  // Create JSON document
  StaticJsonDocument<200> doc;
  doc["plant_id"] = plantId;
  doc["moisture"] = moistureValue;
  doc["timestamp"] = millis();
  
  // Serialize JSON to string
  String httpRequestData;
  serializeJson(doc, httpRequestData);
  
  // Send HTTP POST request
  int httpResponseCode = http.POST(httpRequestData);
  
  // Check result
  if (httpResponseCode > 0) {
    Serial.print("HTTP Response code: ");
    Serial.println(httpResponseCode);
    String payload = http.getString();
    Serial.println("Response: " + payload);
  } else {
    Serial.print("Error code: ");
    Serial.println(httpResponseCode);
  }
  
  // Free resources
  http.end();
}
                    `}</pre>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="database">
            <Card>
              <CardHeader>
                <CardTitle>Database Connection</CardTitle>
                <CardDescription>Set up a database to store your sensor readings</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <h3 className="text-lg font-medium">Option 1: Use a Cloud Database Service</h3>
                  <p>Recommended services that offer free tiers:</p>
                  <ul className="list-disc pl-6">
                    <li>Firebase Realtime Database</li>
                    <li>MongoDB Atlas</li>
                    <li>Supabase</li>
                  </ul>
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-lg font-medium">Option 2: Set Up Your Own Server</h3>
                  <p>Create a simple API endpoint using technologies like:</p>
                  <ul className="list-disc pl-6">
                    <li>Node.js + Express</li>
                    <li>Python + Flask</li>
                    <li>PHP</li>
                  </ul>
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-lg font-medium">Example Database Structure</h3>
                  <div className="bg-black text-white p-4 rounded-md overflow-x-auto text-sm">
                    <pre>{`
// Example MongoDB Collection Structure

{
  "plant_id": "plant-001",
  "moisture": 65,
  "timestamp": 1619832000000,
  "created_at": "2023-04-30T12:34:56Z"
}

// SQL Table Structure
CREATE TABLE soil_readings (
  id SERIAL PRIMARY KEY,
  plant_id VARCHAR(50) NOT NULL,
  moisture INTEGER NOT NULL,
  timestamp BIGINT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
                    `}</pre>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-lg font-medium">API Endpoint Implementation</h3>
                  <p>Your API endpoint should:</p>
                  <ol className="list-decimal pl-6">
                    <li>Receive JSON data from Arduino</li>
                    <li>Validate the incoming data</li>
                    <li>Store it in your database</li>
                    <li>Return a success/failure response</li>
                  </ol>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="troubleshooting">
            <Card>
              <CardHeader>
                <CardTitle>Troubleshooting Guide</CardTitle>
                <CardDescription>Common issues and solutions</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-lg font-medium">WiFi Connection Issues</h3>
                    <ul className="list-disc pl-6">
                      <li>Check your WiFi credentials</li>
                      <li>Ensure your WiFi router is within range</li>
                      <li>Some networks require MAC address registration</li>
                      <li>Try using a mobile hotspot for testing</li>
                    </ul>
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="text-lg font-medium">Sensor Readings Issues</h3>
                    <ul className="list-disc pl-6">
                      <li>Calibrate your sensor with dry soil (air) and water to set min/max values</li>
                      <li>Check connections and pins</li>
                      <li>Some sensors work better with 3.3V instead of 5V</li>
                      <li>If using capacitive sensors, ensure the sensor is fully inserted into the soil</li>
                    </ul>
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="text-lg font-medium">HTTP Errors</h3>
                    <ul className="list-disc pl-6">
                      <li>400 (Bad Request): Check JSON format and required fields</li>
                      <li>401/403: Authentication or authorization issue</li>
                      <li>404: Incorrect API endpoint URL</li>
                      <li>500: Server-side error - check your API logs</li>
                    </ul>
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="text-lg font-medium">Power Consumption</h3>
                    <ul className="list-disc pl-6">
                      <li>For battery-powered operation, use deep sleep mode</li>
                      <li>Consider solar power for outdoor sensors</li>
                      <li>Reduce sampling frequency to extend battery life</li>
                      <li>ESP8266/ESP32 consume more power than Arduino + separate low-power radio</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Setup;
