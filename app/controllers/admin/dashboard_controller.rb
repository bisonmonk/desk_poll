class Admin::DashboardController < ApplicationController
  before_filter :require_signed_in
  
  def index
  end
end
