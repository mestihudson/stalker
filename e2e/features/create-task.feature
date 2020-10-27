Feature: Create task

  As a user
  I want to add a task
  So that I can manage the spend on my activities

  Scenario: Save task
    Given User fills required info
    When User saves the task
    Then Task has been added
