
void setup() {
  Serial.begin(9600);
}

void loop() {
  //if (Serial.available() > 0){
  int player01 = analogRead(A0);
  int player02 = analogRead(A1);
  //int mappedPot = map(potentiometer, 0, 1023, 0, 255);
  Serial.print(player01);
  Serial.print(",");
  Serial.println(player02);
  delay(50);
  }
//}
