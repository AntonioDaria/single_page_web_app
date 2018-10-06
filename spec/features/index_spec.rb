feature "viewing the index page" do
  scenario " it connects to the index page" do
    visit ('/')
    expect(page).to have_button 'View'
  end
end
