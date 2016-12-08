
When(/^I click "([^"]*)" for the friend "([^"]*)"$/) do |button, friend|
  user_id = User.find_by(email: friend).id
  element = "#request_#{user_id.to_s}"
  save_and_open_page
  within element do
    click_on button
  end
end
