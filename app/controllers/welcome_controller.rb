class WelcomeController < ApplicationController
skip_before_action :verify_authenticity_token
  def index
	
  end

  def translate
	@punjabiSentence = params[:punjabiAaala]
	@punjabiWords = @punjabiSentence.split(/\W+/)
	@noOfWords = @punjabiWords.length - 1
	@urduWords = []

	for i in 0..@noOfWords
		@urduObj = Translation.where(punjabi: @punjabiWords[i]).first
		if @urduObj 		
		  @urduWords << @urduObj.urdu
		else 
		  @urduWords << "translation-not-found"
		end
   	end		
  end

end
