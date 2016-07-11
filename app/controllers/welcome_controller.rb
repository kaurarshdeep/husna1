class WelcomeController < ApplicationController
skip_before_action :verify_authenticity_token
  def index
	
  end

  def translate
	@pun = params[:urduAaala].split(/\W+/).uniq.inspect
  end
end
