# FocusContext API Usage Guide

## Overview

The `FocusContext` provides a centralized state management system for the focus timer application. It manages timer state, focus sessions, goals, and break mode.

## How to Use

### 1. Import the Context Hook

```typescript
import { useFocusContext } from "../store/FocusContext";
```

### 2. Use in Components

```typescript
const MyComponent = () => {
  const { isPlaying, elapsedTime, percentage, startTimer, pauseTimer } =
    useFocusContext();

  // Your component logic here
};
```

## Available Context Values

### Timer State

- `isPlaying: boolean` - Whether the timer is currently running
- `elapsedTime: number` - Current elapsed time in seconds
- `totalDuration: number` - Total timer duration in seconds
- `percentage: number` - Progress percentage (0-100)

### Timer Controls

- `startTimer(): void` - Start the timer
- `pauseTimer(): void` - Pause the timer
- `resetTimer(): void` - Reset timer to 0
- `setTotalDuration(duration: number): void` - Set timer duration

### Focus Session State

- `currentGoal: string` - Current focus goal
- `setCurrentGoal(goal: string): void` - Set focus goal

### Session Tracking

- `focusSessions: FocusSession[]` - Array of completed focus sessions
- `addFocusSession(session: FocusSession): void` - Add a completed session

### Break State

- `isBreakMode: boolean` - Whether currently in break mode
- `toggleBreakMode(): void` - Toggle between focus and break modes

## FocusSession Interface

```typescript
interface FocusSession {
  id: string;
  goal: string;
  duration: number;
  completed: boolean;
  timestamp: Date;
}
```

## Example Usage

### Timer Component

```typescript
const TimerDisplay = () => {
  const { elapsedTime, percentage, isPlaying } = useFocusContext();

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`;
  };

  return (
    <div>
      <div>{formatTime(elapsedTime)}</div>
      <div>{percentage.toFixed(1)}%</div>
      <div>{isPlaying ? "Running" : "Paused"}</div>
    </div>
  );
};
```

### Goal Management

```typescript
const GoalManager = () => {
  const { currentGoal, setCurrentGoal } = useFocusContext();

  const handleGoalChange = (newGoal: string) => {
    setCurrentGoal(newGoal);
  };

  return (
    <div>
      <input
        value={currentGoal}
        onChange={(e) => handleGoalChange(e.target.value)}
        placeholder="What's your goal?"
      />
    </div>
  );
};
```

### Session History

```typescript
const SessionHistory = () => {
  const { focusSessions } = useFocusContext();

  return (
    <div>
      <h3>Today's Sessions</h3>
      {focusSessions.map((session) => (
        <div key={session.id}>
          <div>{session.goal}</div>
          <div>{Math.floor(session.duration / 60)} minutes</div>
          <div>{session.timestamp.toLocaleTimeString()}</div>
        </div>
      ))}
    </div>
  );
};
```

## Features

### Automatic Session Tracking

- Completed focus sessions are automatically saved
- Sessions are persisted in localStorage
- Break sessions are not tracked

### Timer Controls

- Start/pause functionality
- Automatic completion handling
- Reset capability
- Configurable duration

### Goal Management

- Set and update focus goals
- Goals are persisted in localStorage
- Clear goal functionality

### Break Mode

- Toggle between focus and break modes
- Timer resets when switching modes
- Different UI states for each mode

## LocalStorage Persistence

The context automatically saves and loads:

- Current focus goal
- Completed focus sessions
- Timer state (resets on page reload)

## Error Handling

The `useFocusContext` hook includes error handling:

- Throws error if used outside of `FocusProvider`
- Graceful localStorage error handling
- TypeScript type safety
