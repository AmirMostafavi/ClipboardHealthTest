# Ticket Breakdown
We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**


Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".


You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here

1. First we're going to need some database modification. A new table named FacilityAgents with 4 fields named `id`, `facility_id`, `agent_id` and `facility_given_id` to store a custom given agent id from each Facility. And we also need to add field named `agent_id` to Shifts table, to map each Shift to an agent (if it's not implemented yet).
2. Then we're going to implement `getFacilityAgents` function which accepts a FacilityId to query through FacilityAgents table and find agents working for a facility (However this function is not necessary if we're just going to get a report for 1 facility agent). 
3. Then we should implement `getShiftsByAgent` function which accepts a `facility_given_id` and query through the `FacilityAgents` to find out the actual `agent_id`. (However we can modify this part if we already have the actual `agent_id` from the previous function). After we found out the real agents' ids, we iterate through the Shifts table to get the relevent Shifts we are looking for based on the `agent_id`.
4. And then we can call `generateReport` with the output Shifts from `getShiftsByAgent` function.
