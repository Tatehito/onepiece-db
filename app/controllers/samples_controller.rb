class SamplesController < ApplicationController
  include ActionController::HttpAuthentication::Basic::ControllerMethods

  before_action :basic_authenticate if Rails.env.production?

  def index
    render json: { title: "this site is ONEPIECE DB!" }
  end

  private

  def basic_authenticate
    authenticate_or_request_with_http_basic do |name, password|
      name == ENV['BASIC_AUTH_NAME'] && password == ENV['BASIC_AUTH_PASSWORD']
    end
  end
end
