---
title: Intuitive UI - What the heck is it?
date: 2015-08-10
---

### ["Intuitive UI: What the heck is it?" with Everett McKay](http://www.meetup.com/VTCode/events/223784541/)


[UX Design Edge](http://www.uxdesignedge.com/) - Offer UI Deisgn classes, workshops, and consulting

[User Experience Design Essentials](http://uxdesignedge.wufoo.com/forms/z7x4a9/def/Field14=October%2012%20-%2014%2C%202015%20%28Burlington%20VT%29)

Code: UXBTV

Everett McKay - Developer -> UI

[UI is Communication](http://www.amazon.com/UI-Communication-Intuitive-Interfaces-Effective/dp/0123969808) - How to design intuitive, user centered interfaces by focusing on effective communication


**Overview**

* Agenda
* Strategically unintuitive
* Intuitive task flow
* Intuitive Mobile UI
* Intuitive Criteria

**Definition**

> If you can't define it, you can't design it

Customer's highest praise - "it was intuitive"

* Simple, easy to use
* Really 'dumbed down' so any idiot can get it
* Don Norman - [Design of Everyday Things](http://www.amazon.com/Design-Everyday-Things-Donald-Norman/dp/1452654123)
	* Designer's are having conversations with users - just not face to face
	* "A gap between the design model and the user model"
* Whatever Apple does
* I know it when I see it
* Dictionary: Instinctive
* Group Definition
	* Reduce User Faituge
	* Never get upset at app
	* Teaches me how to use it
	* Domain - centric
	* Things are where you expect them
	* Principle of Least Surprise

> A UI is *intiutive* when target users understand its behavior and effect without use of reason, memorization, experimentation, assistance, or training

> An intuitive UI is *immediately self-explanatory*

An intuitive UI shouldn't need a **User Manual** (explains unintuitive UI)

**Old World** - solve a problem, people will by your solution even if they need training
**New World** - people expect to figure things out immediately

[RTFM][RTFM] - doesn't work with modern software
[RTFM]: https://en.wikipedia.org/wiki/RTFM "read the following (fucking) manual"

Figure out if a UI is Intuitive


**Interaction Lifecycle**:

* Sets a goal
* Finds an interactive UI that might achieve that goal
* Performs the action
* Observes the results

**Features of Intuitive Design**:

* **Discoverability** - Users can find the feature
* **Affordance** - Visually, UI has clues (buttons look like buttons)
* **Predictability** - Predict the result - if accurate, it was predictable
* **Responsiveness** - Clear immediate feedback (successful or unsuccessful)
* **Efficiency** - Perform action with minimum effort
* **Forgiveness** - Users make small mistakes - either the right thing happens or they can easily undo the change
* **Explorability** - Users must be able to explore the produce (without fear of getting lost)

Dropdowns with unknown options: mechanically it's fine, but it doesn't inform what to do


**Consistency**

* Jakob Nielsen's Law of UX
	* > Users spend most of their time using software other than yours
	* http://www.nngroup.com/articles/end-of-web-design/
	* > Users spend most of their time on other sites. This means that users prefer your site to work the same way as all the other sites they already know.
* Interaction Consistency > Visual Consistency
* Benefits of small improvements achieved through inconsistency are easily outweighed by lack of familiarity
	* iOS - Swipe left to delete
	* Android - Swipe to delete (context sensitive)

Donald Norman:

> If a door handle needs a sign, then it's design is probably faulty

Door handle has **affordance** that suggests pulling
Bar has *affordance* that suggests pushing

Digital Translation: If UI needs a label to explain the interaction the design has failed


**Design Feedback / Reviews**

* People use 'not intuitive' as design feedback - Conversations productive?
* Make more productive using intuitive design features (attributes)

Rob: Workflow vs. Form

**Strategically Unintuitive**

* Most interactions should be intuitive
* It's okay if using feature is **Optional**

**Excuses**

* Very sophisticated product
* For trained professionals, not your mom
* People learn things all the time
	* Will they learn it?
	* Will they remember?
	* Should success of product be dependent on that?
	* Usage might be infrequent
* Not everything can be discoverable or have affordance


**Unintuitive UI**

* Advanced, infrequent, optional Commands
* Shortcuts and gestures
	* not a problem if redundant
* Inevitable discoverability
	* Not permanently hidden
* Delighters
	* Experienced users are rewarded by finding them
		* ex. Where's waldo
* Advanced Modes
	* Don't want user's accidentally clicking


**Intuitive UI has a cost**:

* Discoverability - may result in clutter
* Predictability - Might require too much explanation

**Levels of Intuitiveness**:

* Intuitive
	* Fully Intuitive - Tap
* Usable
	* Sensible - Swipe across photos - Laws of physics
	* Learnable - Pinch & Spread Zoom - See someone else do it
	* Guessable - Pull down to refresh
	* Trainable - We have to train people - we want to avoid this
* Unusable
	* Confusing
	* Unusuable

From All Users will get it --> Trained users might remember


**Single Trial Learning**

* Sensible - Single trial, self
* Learnable - Single trial, shown
* Guessable - Multiple trials, self
* Trainable - Multiple trials, shown

**FAQ**

* Isn't it subjective and personal?
	* Remove subjective and personal reference points

**Task Flows**

Individual Interaction --> Multiple Step Task Flow

**Inductive UI**

Goal: Eliminate the need to think and experiment at the task level
Elements: **Main instruction** on the page
First UI Question: "What am I supposed to do here?"
When not obvious, we should consider stating explicitly

**Explainable First**

If you can explain it, other's can learn it and do it
That quality of the main instruction often predicts the quality of the page (ex. "Manage" doesn't really mean much)
If the task flow is complex, convoluted, or unnatural, it should fail by this point


**Deductive UI** - All buttons deactivated but one
**Inductive UI** - Choose amongst all options

**Process**

1. Take a page
2. Think of Main Instruction
3. Re-design page around main instruction
4. If still not obvious, state explicitly


![WGet](https://i.imgur.com/6Ke1ELM.png)

wGet -> Copy website files for bacup and offline viewing

Main Instruction > Cosmetic Features

> 'If I had an hour to solve a problem I'd spend 55 minutes thinking about the problem and 5 minutes thinking about solutions.'
> - Albert Einstein

**User Research**

* Traditional UCD is too dependent on research
* Don't need research to let you know users click on buttons


### Mobile UI

* Are gestures intuitive?
	* Some, all, none?
		* What's the difference?
			* Gestures - Immediate Response

[Coach Marks](https://www.google.com/search?q=Coach+Marks&tbm=isch) - On screen tutorial

* Better to design around
* Rather than dump all the tutorials - see if you can avoid
	* Use Explicit Commands
	* Use standard well known gestures when possible
* Tell me the gesture in context sensitive world
	* Samsung swipe prnt screen gesture
	* Don't dump all upfront
	* When you walk into a store, wait until I've explored around a little bit
* Use when:
	* custom, poorly understood gesture
	* Only show 3 if you're forcing them to look at it
	* 3+ available from help button
	* **Contextual** and **modeless** is best
* UI Revamp 
	* Tour to new features

> Change is bad unless it's great

People know the old bad way, don't rip the rug out from under them


**Make Gestures Intiuitive**

* **Add Affordance** - grabbers, arrows, page indicators
* Labels - such as standard icons
* Make sure interactive elements are "alive" - always repsond to taps
* Avoid location specific gestures (edge swipes)
* Breaking rules requires training

### Evaluating Intuitiveness

Traditional Approaches:

* User Testing - 
	* Can be very labor intensive and time consuming
* RTFM - no longer acceptable for well designed, modern software
* Fail Quickly

Look for attributes

**Streamlined Cognitive Walkthrough (SCW)**

* Walk through tasks, ask each of these questions on every step:
	1. How will users know what to do?
	2. If they do they right thing, how will they know?
	3. If they they do the wrong thing, how will they know?
	4. If users do the wrong thing, how will they correct the problem?

* Executives never argue with their own conclusions
	* Let other people walk through application - they don't have to blindly defend the software. Let them draw conclusion on your own

* Get your team together and give a try
* Make sure some people in the room aren't familar with the app


**Communication Review**

Imagine a conversation between friends

* Suppose you are looking over a user's shoulder and they ask
* *"What do I do here?"*.  
* Think about the explanation: steps, order
* **The verbal conversation is the right way**
* Try to make UI like that human conversation

1. When someone is presenting a design
2. Listen to what they say, compare to what is on the screen


### A/B Testing

[Which Test Won](https://whichtestwon.com/)


[Usability vs. Learnability](http://blog.codinghorror.com/usability-vs-learnability/)
