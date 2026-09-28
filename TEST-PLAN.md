# Mobile Game Test Plan

## Objective
Validate the 2048 Android game for functional correctness, gameplay behaviour, mobile compatibility, interruptions, lifecycle handling and basic performance.

## Scope

### Functional
- App launch
- Game board loading
- Swipe controls
- Game state
- Restart

### Mobile
- Background / foreground
- Lock / unlock
- Notifications
- Incoming calls
- Network ON/OFF
- Installation / reinstall

### Compatibility
- Android versions
- Screen resolutions
- Device configurations
- Low-end devices

### Performance
- FPS observation
- CPU
- GPU
- Memory
- Battery
- Temperature
- Long-duration stability

### Diagnostics
- ADB
- Logcat
- Screenshot evidence
- Crash/freeze investigation

## Entry Criteria
- Application installed
- Device connected
- USB debugging enabled
- Appium server available

## Exit Criteria
- Critical test cases executed
- Defects documented
- Failed tests investigated
- Regression completed
- Evidence collected

## Test Environment

Device: I2404
Android: 16
SDK: 36
Resolution: 1080x2408
Density: 440
Automation: Appium 3 + UiAutomator2
Client: WebdriverIO
Language: TypeScript
Runner: Mocha