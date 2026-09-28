# Example Jira Defect

## Summary
Application does not return to expected foreground state immediately after restart.

## Environment
- Device: Android physical device
- Model: I2404
- Android: 16
- App: 2048

## Preconditions
Application is installed.

## Steps
1. Launch the game.
2. Terminate the application.
3. Start the application again.
4. Immediately check the active package.

## Expected Result
The 2048 application package should become the foreground application after restart.

## Actual Result
During one execution, the launcher package was briefly returned before the game package became active.

## Severity
Medium

## Priority
Medium

## Resolution / Test Improvement
Added explicit waiting and package verification after application restart instead of assuming the activation command alone meant the game was already foregrounded.

## Result After Fix
Restart test passed successfully.
