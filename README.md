# Android Mobile Game QA & Automation

## Project Overview

Hands-on Android mobile game testing project using a lightweight open-source 2048 game.

The project combines manual QA with mobile automation and device diagnostics.

## Tech Stack

- Appium 3
- UiAutomator2
- WebdriverIO
- TypeScript
- Mocha
- ADB
- Android device

## Application

Package:
com.tpcstld.twozerogame

Activity:
com.tpcstld.twozerogame.MainActivity

## Automated Coverage

- Application launch and package verification
- Four directional gameplay gestures
- Native app context verification
- Background / foreground lifecycle
- Application termination and restart
- Screenshot evidence

## Mobile QA Coverage

- Functional testing
- Gameplay testing
- Installation and reinstall
- Network interruption
- Notification interruption
- Background / foreground
- Low-end device observation
- Compatibility considerations
- Battery / thermal observation
- Memory observation
- Crash / log analysis

## Device Evidence

Model: I2404
Android: 16
SDK: 36
Resolution: 1080x2408
Density: 440

Observed during diagnostic capture:

- Battery: 60%
- Temperature: 37.5 C
- App TOTAL PSS: approximately 138.9 MB
- CPU snapshot: 0%
- Automation suite: 31.77 seconds
- Automated tests: 4/4 passed

The CPU value is a point-in-time snapshot, not a full performance benchmark.

## Automation Architecture

TypeScript
    |
WebdriverIO
    |
Appium
    |
UiAutomator2
    |
ADB
    |
Android Device
    |
2048

## Key Mobile Testing Concepts Demonstrated

### Gestures
Implemented reusable touch gestures for:

- Left
- Right
- Up
- Down

### App Lifecycle

Validated:

- Background
- Foreground
- Termination
- Restart

### Verification

Automation does not rely only on command success. The test verifies the active package after important lifecycle operations.

## Manual vs Automation

The project uses automation for repeatable flows and manual testing for exploratory and device-behaviour scenarios.

Automation is used where the action is repeatable and deterministic.

Manual testing remains useful for:

- Gameplay feel
- Visual issues
- Touch behaviour
- Battery and heating observations
- Exploratory testing
- Interruptions
- Usability observations

## Defect Management

Defects are documented with:

- Summary
- Preconditions
- Steps to reproduce
- Expected result
- Actual result
- Severity
- Priority
- Environment
- Evidence

## Interview Summary

I built a small Android mobile-game QA project using Appium 3, UiAutomator2, WebdriverIO and TypeScript. I automated application launch, gameplay gestures and mobile application lifecycle scenarios on a real Android device. I also used ADB to collect device information, memory, CPU, battery, thermal and logcat data.

My professional experience is primarily web/API QA automation, while this project demonstrates my hands-on mobile and game-testing experience.
