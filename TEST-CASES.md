# Mobile Game Test Cases

| ID | Test Case | Type | Expected Result |
|---|---|---|---|
| TC01 | Launch application | Functional | Game launches without crash |
| TC02 | Verify application package | Functional | Expected package is active |
| TC03 | Load game board | Functional | Game board loads correctly |
| TC04 | Swipe left | Gameplay | Valid left gesture is accepted |
| TC05 | Swipe right | Gameplay | Valid right gesture is accepted |
| TC06 | Swipe up | Gameplay | Valid up gesture is accepted |
| TC07 | Swipe down | Gameplay | Valid down gesture is accepted |
| TC08 | Perform consecutive gestures | Gameplay | Game remains responsive |
| TC09 | Background application | Lifecycle | Application moves to background |
| TC10 | Return from background | Lifecycle | Application returns correctly |
| TC11 | Terminate application | Lifecycle | Application terminates |
| TC12 | Restart application | Lifecycle | Application launches again |
| TC13 | Verify package after restart | Functional | Correct package is foreground |
| TC14 | Network OFF during gameplay | Network | Game handles loss of connectivity gracefully |
| TC15 | Network restored | Network | Application recovers correctly |
| TC16 | Notification during gameplay | Interruption | Game does not crash or hang |
| TC17 | Incoming call during gameplay | Interruption | Game handles interruption gracefully |
| TC18 | Lock and unlock device | Interruption | Game resumes correctly |
| TC19 | Reinstall application | Installation | Application installs and launches correctly |
| TC20 | Launch after reinstall | Installation | Application starts normally |
| TC21 | Low-end device observation | Performance | No obvious lag/freezing |
| TC22 | Long-duration gameplay | Performance | No crash, freeze or severe degradation |
| TC23 | Battery observation | Performance | No abnormal battery drain observed |
| TC24 | Thermal observation | Performance | No abnormal heating observed |
| TC25 | Memory observation | Performance | Memory usage is recorded for analysis |
| TC26 | Crash/log investigation | Diagnostics | Relevant application logs can be isolated |
| TC27 | Screenshot evidence | Evidence | Test evidence is captured |
| TC28 | Different Android version | Compatibility | Game remains functional |
| TC29 | Different screen resolution | Compatibility | UI/gameplay remains usable |
| TC30 | Orientation change | Compatibility | Application handles orientation as designed |

## Current Execution

Automated:
- Launch + package verification: PASS
- Four gameplay gestures: PASS
- Background / foreground: PASS
- Terminate / restart: PASS

Total automated scenarios: 4
Passed: 4
Failed: 0
