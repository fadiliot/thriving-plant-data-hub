
import Navbar from "@/components/Navbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Plant } from "lucide-react";

const Plants = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 container py-8">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-3xl font-bold">Your Plants</h1>
            <p className="text-muted-foreground">Manage and monitor your connected plants</p>
          </div>
          <Button>
            <Plant className="mr-2 h-4 w-4" />
            Add New Plant
          </Button>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="flex justify-between items-center">
                Kitchen Basil
                <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Healthy</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex justify-center mb-4">
                <div className="relative w-24 h-28">
                  {/* Pot */}
                  <div className="absolute bottom-0 w-full h-16 bg-amber-800 rounded-b-xl rounded-t-3xl overflow-hidden">
                    {/* Soil */}
                    <div className="absolute bottom-0 w-full h-12 bg-amber-900 rounded-b-lg">
                      {/* Water Level */}
                      <div className="absolute bottom-0 w-full soil-level-indicator bg-blue-300" style={{ height: "78%" }} />
                    </div>
                  </div>
                  {/* Plant */}
                  <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
                    <Plant className="h-16 w-16 plant-animation text-green-500" />
                  </div>
                </div>
              </div>
              
              <Tabs defaultValue="info">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="info">Info</TabsTrigger>
                  <TabsTrigger value="history">History</TabsTrigger>
                  <TabsTrigger value="settings">Settings</TabsTrigger>
                </TabsList>
                <TabsContent value="info" className="space-y-2 pt-3">
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div className="font-medium">Type:</div>
                    <div>Herb</div>
                    <div className="font-medium">Location:</div>
                    <div>Kitchen Window</div>
                    <div className="font-medium">Added:</div>
                    <div>March 15, 2023</div>
                    <div className="font-medium">Current Moisture:</div>
                    <div className="font-bold text-green-500">78% (Optimal)</div>
                  </div>
                </TabsContent>
                <TabsContent value="history" className="pt-3">
                  <div className="text-sm text-muted-foreground">
                    <div className="mb-2 pb-2 border-b">
                      <div className="font-medium">May 1, 2023</div>
                      <div>Watered - Moisture increased to 80%</div>
                    </div>
                    <div className="mb-2 pb-2 border-b">
                      <div className="font-medium">April 28, 2023</div>
                      <div>Low moisture alert (25%)</div>
                    </div>
                    <div>
                      <div className="font-medium">April 25, 2023</div>
                      <div>Watered - Moisture increased to 75%</div>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="settings" className="pt-3">
                  <div className="space-y-3 text-sm">
                    <div>
                      <div className="font-medium mb-1">Alert Threshold</div>
                      <div className="flex items-center">
                        <div className="bg-gray-200 h-2 flex-1 rounded-full overflow-hidden">
                          <div className="bg-primary h-full rounded-full" style={{ width: "30%" }} />
                        </div>
                        <span className="ml-2">30%</span>
                      </div>
                    </div>
                    <div>
                      <div className="font-medium mb-1">Optimal Range</div>
                      <div className="flex items-center justify-between text-xs">
                        <span>50%</span>
                        <span>to</span>
                        <span>75%</span>
                      </div>
                    </div>
                    <Button size="sm" className="w-full">Update Settings</Button>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
          
          {/* More plant cards would go here - similar structure */}
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="flex justify-between items-center">
                Living Room Fern
                <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Healthy</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex justify-center mb-4">
                <div className="relative w-24 h-28">
                  {/* Pot */}
                  <div className="absolute bottom-0 w-full h-16 bg-amber-800 rounded-b-xl rounded-t-3xl overflow-hidden">
                    {/* Soil */}
                    <div className="absolute bottom-0 w-full h-12 bg-amber-900 rounded-b-lg">
                      {/* Water Level */}
                      <div className="absolute bottom-0 w-full soil-level-indicator bg-blue-300" style={{ height: "55%" }} />
                    </div>
                  </div>
                  {/* Plant */}
                  <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
                    <Plant className="h-16 w-16 plant-animation text-green-500" />
                  </div>
                </div>
              </div>
              
              <Tabs defaultValue="info">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="info">Info</TabsTrigger>
                  <TabsTrigger value="history">History</TabsTrigger>
                  <TabsTrigger value="settings">Settings</TabsTrigger>
                </TabsList>
                <TabsContent value="info" className="space-y-2 pt-3">
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div className="font-medium">Type:</div>
                    <div>Indoor Fern</div>
                    <div className="font-medium">Location:</div>
                    <div>Living Room</div>
                    <div className="font-medium">Added:</div>
                    <div>February 2, 2023</div>
                    <div className="font-medium">Current Moisture:</div>
                    <div className="font-bold text-green-500">55% (Optimal)</div>
                  </div>
                </TabsContent>
                <TabsContent value="history" className="pt-3">
                  <div className="text-sm text-muted-foreground">
                    <div className="mb-2 pb-2 border-b">
                      <div className="font-medium">April 30, 2023</div>
                      <div>Watered - Moisture increased to 70%</div>
                    </div>
                    <div className="mb-2 pb-2 border-b">
                      <div className="font-medium">April 26, 2023</div>
                      <div>Low moisture alert (28%)</div>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="settings" className="pt-3">
                  <div className="space-y-3 text-sm">
                    <div>
                      <div className="font-medium mb-1">Alert Threshold</div>
                      <div className="flex items-center">
                        <div className="bg-gray-200 h-2 flex-1 rounded-full overflow-hidden">
                          <div className="bg-primary h-full rounded-full" style={{ width: "35%" }} />
                        </div>
                        <span className="ml-2">35%</span>
                      </div>
                    </div>
                    <div>
                      <div className="font-medium mb-1">Optimal Range</div>
                      <div className="flex items-center justify-between text-xs">
                        <span>45%</span>
                        <span>to</span>
                        <span>70%</span>
                      </div>
                    </div>
                    <Button size="sm" className="w-full">Update Settings</Button>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="flex justify-between items-center">
                Office Succulent
                <span className="bg-amber-100 text-amber-800 text-xs px-2 py-1 rounded-full">Needs Water</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex justify-center mb-4">
                <div className="relative w-24 h-28">
                  {/* Pot */}
                  <div className="absolute bottom-0 w-full h-16 bg-amber-800 rounded-b-xl rounded-t-3xl overflow-hidden">
                    {/* Soil */}
                    <div className="absolute bottom-0 w-full h-12 bg-amber-900 rounded-b-lg">
                      {/* Water Level */}
                      <div className="absolute bottom-0 w-full soil-level-indicator bg-amber-200" style={{ height: "25%" }} />
                    </div>
                  </div>
                  {/* Plant */}
                  <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
                    <Plant className="h-16 w-16 plant-animation text-amber-500" />
                  </div>
                </div>
              </div>
              
              <Tabs defaultValue="info">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="info">Info</TabsTrigger>
                  <TabsTrigger value="history">History</TabsTrigger>
                  <TabsTrigger value="settings">Settings</TabsTrigger>
                </TabsList>
                <TabsContent value="info" className="space-y-2 pt-3">
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div className="font-medium">Type:</div>
                    <div>Succulent</div>
                    <div className="font-medium">Location:</div>
                    <div>Office Desk</div>
                    <div className="font-medium">Added:</div>
                    <div>January 10, 2023</div>
                    <div className="font-medium">Current Moisture:</div>
                    <div className="font-bold text-amber-500">25% (Low)</div>
                  </div>
                </TabsContent>
                <TabsContent value="history" className="pt-3">
                  <div className="text-sm text-muted-foreground">
                    <div className="mb-2 pb-2 border-b">
                      <div className="font-medium">April 26, 2023</div>
                      <div>Watered - Moisture increased to 60%</div>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="settings" className="pt-3">
                  <div className="space-y-3 text-sm">
                    <div>
                      <div className="font-medium mb-1">Alert Threshold</div>
                      <div className="flex items-center">
                        <div className="bg-gray-200 h-2 flex-1 rounded-full overflow-hidden">
                          <div className="bg-primary h-full rounded-full" style={{ width: "20%" }} />
                        </div>
                        <span className="ml-2">20%</span>
                      </div>
                    </div>
                    <div>
                      <div className="font-medium mb-1">Optimal Range</div>
                      <div className="flex items-center justify-between text-xs">
                        <span>20%</span>
                        <span>to</span>
                        <span>40%</span>
                      </div>
                    </div>
                    <Button size="sm" className="w-full">Update Settings</Button>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Plants;
